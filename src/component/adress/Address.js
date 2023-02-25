import './Address.css';
import Map from "./Map";

const Address = () => {
  
    return (
        <div className="address_wrap">
            <div>오시는 길</div>
            <Map />
            <div className="address_text_wrap">
                <table className="address_table">
                    <tbody>
                        <tr>
                            <th>도로명 주소:</th>
                            <td>서울특별시 강남구 언주로 508</td>
                        </tr>
                        <tr>
                            <th>지번 주소:</th>
                            <td>서울특별시 강남구 역삼동 701번지</td>
                        </tr>
                    </tbody>
                </table>
                <table>
                    <tbody>
                        <tr className="address_table_subject">
                            <th colSpan={2}>🚌 교통편</th>
                        </tr>
                        <tr>
                            <th>지하철</th>
                            <td>
                                2호선, 분당선 "선릉역" 5번출구 도보 5분<br/>
                                선릉역 5번출구에서 셔틀버스 운행 (5분간격)
                            </td>
                        </tr>
                        <tr>
                            <th>버스</th>
                            <td>
                                KT 강남지사 하차<br/>
                                <span className="blue">간선버스:</span> 141 (도봉산 ↔ 염곡동)<br/>
                                <span className="green">지선버스:</span> 3422 (장지동 ↔ 압구정동)<br/><br/>
                                한국기술센터, 상록회관 하차<br/>
                                <span className="blue">간선버스:</span> 146 (상계동 ↔ 강남역)<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                146 (상계동 ↔ 강남역)<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                350 (송파 ↔ 여의도)<br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                740 (덕은동 ↔ 잠실역)<br/>
                            </td>
                        </tr>
                        <tr>
                            <th>자가용</th>
                            <td>
                                네비게이션 "서울상록회관" 또는 "서울시 강남구 언주로 508" 입력<br/>
                                동시주차 500대 가능
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Address