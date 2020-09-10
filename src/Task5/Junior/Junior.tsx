import React, {ChangeEvent, FocusEvent, KeyboardEvent} from "react";
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
import {InputRange} from "../../common/InputRange/InputRange";
import {Switcher} from "../../common/Switcher/Switcher";

type PropsType = {}

export const Junior = React.memo(function Junior(props: PropsType) {

    const saveBtn: string = 'Save';
    const restoreBtn: string = 'Restore';
    const radioName: string = 'radio';
    const selectOptions: OptionsType = ['Andy', 'Den', 'Gab', 'John']
    const radioItems: RadioItemsType = ['Andy', 'Den', 'Gab', 'John']
    const maxValue: number = 100;

    const dispatch = useDispatch();
    const loading = useSelector<AppRootType, StateType>(state => state.loading)

    const [selectValue, setSelectValue] = React.useState('')
    const [inpValue, setInpValue] = React.useState('');
    const [rangeValue, setRangeValue] = React.useState(0);
    const [currentValueDouble, setCurrentValueDouble] = React.useState(maxValue);
    const [slidersMode, setSlidersMode] = React.useState(false)

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
    const changeRangeValue = React.useCallback((e: ChangeEvent<HTMLInputElement>) => {
        slidersMode
            ? setRangeValue(Math.min(+e.currentTarget.value, currentValueDouble - 5))
            : setRangeValue(+e.currentTarget.value)
    }, [slidersMode])
    const changeRangeValueDouble = React.useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setCurrentValueDouble(Math.max(+e.currentTarget.value, rangeValue + 5));
    }, [currentValueDouble])
    const changeRangeMode = () => {
        setRangeValue(0)
        setCurrentValueDouble(maxValue)
        setSlidersMode(!slidersMode)
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
                            type={'text'}
                            value={inpValue}
                            onChange={onInpValueChange}
                            onKeyPress={onKeyPressInInp}
                            onBlur={onBlur}
                            setInpValue={setInpValue}
                            autoFocus={true}
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
                        <hr/>
                        <h3>Task 11</h3>
                        <div className={'wrap'}>
                            <div className={'btnContainer'}>
                                <Button btnName={'Change Range'} onClick={changeRangeMode}/>
                            </div>
                            <InputRange currentValue={rangeValue}
                                        currentValueDouble={currentValueDouble}
                                        minValue={0}
                                        maxValue={maxValue}
                                        double={slidersMode}
                                        changeRangeValueDouble={changeRangeValueDouble}
                                        changeRangeValue={changeRangeValue}/>
                        </div>
                        <hr/>
                        <h3>Task12</h3>
                        <div className={'switchContainer'}>
                            <Switcher />
                        </div>
                    </>
            }
        </div>
    )
})