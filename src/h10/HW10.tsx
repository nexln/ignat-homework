import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import s from "./HW10.module.css"
import preloader from "./preloader.svg"
import {MyButton} from "../common/MyButton/MyButton";

export function HW10() {

    const loadingState = (state: AppStoreType) => state.loading
    const {loading} = useSelector(loadingState)

    const dispatch = useDispatch()

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => dispatch(loadingAC(false)), 2000)
    };

    return (
        <div className={s.loader_block}>
            {loading
                ? (
                    <div className={s.loader}>
                        <img className={s.preloaderImg} src={preloader} alt="preloader"/>
                    </div>
                ) : (
                    <div>
                        <MyButton onClick={setLoading} title={'set loading...'}/>
                    </div>
                )
            }

        </div>
    );
}
