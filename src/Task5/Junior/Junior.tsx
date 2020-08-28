import React, {ChangeEvent, FocusEvent, KeyboardEvent, useState} from "react";
import './Junior.scss';
import {Menu} from "../../Menu/Menu";
import {EditableSpan} from "../../common/EditableSpan/EditableSpan";
import {Button} from "../../common/Button/Button";
import {restoreState, saveState} from "../../LocalStorage/LocalStorage";
import {OptionsType, Select} from "../../common/Select/Select";
import {Radio, RadioItemsType} from "../../common/Radio/Radio";
import {Users} from "../../Task8/Users";
import {Clock} from "../../Task9/Clock";
import {Preloader} from "../../common/Preloader/Preloader";
import {useDispatch, useSelector} from "react-redux";
import {AppRootType} from "../../Redux/store";
import {loadingAC, StateType} from "../../Redux/loading-reducer";

type PropsType = {}

export function Junior(props: PropsType) {

    const saveBtn: string = 'Save';
    const restoreBtn: string = 'Restore';
    const autoFocus: boolean = true;
    const typeInp: string = 'text';
    const radioName: string = 'radio';
    const selectOptions: OptionsType = ['Andy', 'Den', 'Gab', 'John']
    const radioItems: RadioItemsType = ['Andy', 'Den', 'Gab', 'John']

    const dispatch = useDispatch()
    const loading = useSelector<AppRootType, StateType>(state => state.loading)
    const [selectValue, setSelectValue] = useState('')
    const [inpValue, setInpValue] = useState('');

    const onInpValueChange = (e: ChangeEvent<HTMLInputElement>) => setInpValue(e.currentTarget.value);
    const onKeyPressInInp = (e: KeyboardEvent<HTMLInputElement>) => setInpValue(e.currentTarget.value);
    const onBlur = (e: FocusEvent<HTMLInputElement>) => setInpValue(e.currentTarget.value);
    const saveStatus = () => saveState('status', inpValue)
    const restoreStatus = () => setInpValue(restoreState('status', 'Default status ;)'))
    const changeSelectValue = (e: ChangeEvent<HTMLSelectElement>) => setSelectValue(e.currentTarget.value)
    const startLoad = () => {
        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 3000)
    }

    return (
        <div className={'junior'}>
            <h1>Junior Page</h1>
            <Menu/>
            {
                loading.loading
                    ? <Preloader/>
                    : <>
                        <EditableSpan
                            type={typeInp}
                            value={inpValue}
                            onChange={onInpValueChange}
                            onKeyPress={onKeyPressInInp}
                            onBlur={onBlur}
                            setInpValue={setInpValue}
                            autoFocus={autoFocus}
                        />
                        <div className={'btnContainer'}>
                            <Button
                                btnName={saveBtn}
                                onClick={saveStatus}/>
                            <Button
                                btnName={restoreBtn}
                                onClick={restoreStatus}/>
                        </div>
                        <Select
                            onChange={changeSelectValue}
                            value={selectValue}
                            options={selectOptions}/>
                        <hr/>
                        <Radio
                            radioName={radioName}
                            radioItems={radioItems}/>
                        <hr/>
                        <Users/>
                        <hr/>
                        <Clock/>
                        <hr/>
                        <h3>Task 10</h3>
                        <Button btnName={'Loading'} onClick={startLoad}/>
                    </>
            }
        </div>
    )
}