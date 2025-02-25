/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react'
import "../../styles/pages/_Reduction.scss"
import { useNavigate } from 'react-router';
import { useQuery } from 'react-query';
import { AiOutlineLeft } from 'react-icons/ai';
import BasicBackGround from "../../static/image/social/Reduction/BasicBackGround.png"
import Crown from "../../static/image/social/Reduction/Crown.png"
import GoldMedal from "../../static/image/social/Reduction/GoldMedal.png"
import SilverMedal from "../../static/image/social/Reduction/SilverMedal.png"
import CopperMedal from "../../static/image/social/Reduction/CopperMedal.png"
import social from '../../api/social';
import Loading from '../status/Loading';
import Error from '../status/Error';

function Flex() {
    const navigate = useNavigate()
    // 데이터 저장
    const [topList, setTopList] = useState<ApiDataItem[] | undefined>([{
        acc_url: '',
        accountType: '',
        beggar_id: 0,
        date: '',
        level: 0,
        nickname: '',
        rank_num: 0,
        top_url: '',
        total: 0
    }])
    // 데이터 조회
    const { isLoading, error, data } = useQuery('geEXPENDITUREAvg', social.geEXPENDITUREAvg);

    useEffect(() => {
        if (data) {
            setTopList(data)
        }
    }, [data])

    const poorCharacter: { [key: number]: number } = {
        1: 1,
        2: 1,
        3: 1,
        4: 1,
        5: 5,
        6: 6,
    };

    if (isLoading) {
        return <Loading />;
    }
    if (error) {
        return <Error />;
    }

    return (
        <div className='socialBg2'>
            <div id="socialHeader">
                <button type="button" onClick={() => navigate(-1)}>
                    <AiOutlineLeft />
                </button>
                <h1>플렉스 푸어</h1>
            </div>
            <div>
                <div className='BasicBackGround'>
                    <img className='BasicBackGroundimage' src={BasicBackGround} alt="배경" />
                    <div className='Top3Poor2'>
                        {topList && topList[1] && topList[1].level && (
                            <img className='Top2Poor' src={`https://apoorapoors3.s3.ap-northeast-2.amazonaws.com/poor/poor_lv${poorCharacter[topList[1].level]}.svg`} alt="2등거지" />
                        )}
                        {topList && topList[1] && topList[1].top_url && (
                            <img className='Top2PoorItem' src={topList[1].top_url} alt="2등거지 아이템" />
                        )}
                        {topList && topList[1] && topList[1].acc_url && (
                            <img className='Top2PoorItem' src={topList[1].acc_url} alt="2등거지 아이템" />
                        )}
                    </div>
                    <img className='SilverMedal' src={SilverMedal} alt="은메달" />
                    <div className='Top3Poor3'>
                        {topList && topList[2] && topList[2].level && (
                            <img className='Top3Poor' src={`https://apoorapoors3.s3.ap-northeast-2.amazonaws.com/poor/poor_lv${poorCharacter[topList[2].level]}.svg`} alt="3등거지" />
                        )}
                        {topList && topList[2] && topList[2].top_url && (
                            <img className='Top3PoorItem' src={topList[2].top_url} alt="3등거지 아이템" />
                        )}
                        {topList && topList[2] && topList[2].acc_url && (
                            <img className='Top3PoorItem' src={topList[2].acc_url} alt="3등거지 아이템" />
                        )}
                    </div>
                    <img className='CopperMedal' src={CopperMedal} alt="동메달" />
                    <img className='Top1Crown' src={Crown} alt="왕관" />
                    <div className='Top3Poor1'>
                        {topList && topList[0] && topList[0].level && (
                            <img className='Top1Poor' src={`https://apoorapoors3.s3.ap-northeast-2.amazonaws.com/poor/poor_lv${poorCharacter[topList[0].level]}.svg`} alt="1등거지" />
                        )}
                        {topList && topList[0] && topList[0].top_url && (
                            <img className='Top1PoorItem' src={topList[0].top_url} alt="1등거지 아이템" />
                        )}
                        {topList && topList[0] && topList[0].acc_url && (
                            <img className='Top1PoorItem' src={topList[0].acc_url} alt="1등거지 아이템" />
                        )}
                    </div>
                    <img className='GoldMedal' src={GoldMedal} alt="금메달" />
                </div>
            </div>
            <div className='Top1Number'>1</div>
            <div className='Top2Number'>2</div>
            <div className='Top3Number'>3</div>
            <div className='Top1Nickname'>
                {topList && topList[0]?.nickname}
                <div className='Top1Price'>
                    {topList && topList[0].total.toLocaleString()}원
                </div>
            </div>
            <div className='Top2Nickname'>

                {topList && topList[1]?.nickname}
                <div className='Top2Price'>
                    {topList && topList[1]?.total.toLocaleString()}원
                </div>
            </div>
            <div className='Top3Nickname'>
                {topList && topList[2]?.nickname}
                <div className='Top3Price'>
                    {topList && topList[2]?.total.toLocaleString()}원
                </div>
            </div>
            <div className='socialRankingBox2'>
                <div className='Top10ListHeader'>
                    <p>닉네임</p> <p>금액</p>
                </div>
                {topList?.map((item, index) => (
                    <div key={index} className='Top10List'>
                        <p>{item.rank_num}</p>
                        <div className='Top10Poors'>
                            <div className='ProfileNickname'>
                                <div className="Top10PoorsImage">
                                    <img className="Top10Image" src={`https://apoorapoors3.s3.ap-northeast-2.amazonaws.com/poor/poor_lv${poorCharacter[item.level]
                                        }.svg`} alt='푸어 이미지' />
                                    <img className='Top10ImageItem' src={item.top_url} alt='푸어 상의' />
                                    <img className='Top10ImageItem' src={item.acc_url} alt='푸어 악세서리' />
                                </div>
                                {item.nickname}
                            </div>
                            <div className='Top10PoorsPrice'>
                                {item.total.toLocaleString()}원</div></div>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default Flex

interface ApiDataItem {
    acc_url: string
    accountType: string
    beggar_id: number
    date: string
    level: number
    nickname: string | number
    rank_num: number
    top_url: string
    total: number
}

