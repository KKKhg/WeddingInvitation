import './Address.css';
import KakaoMap from "./KakaoMap";

const Address = () => {
  
    return (
        <div className="adress_wrap">
            <div>오시는 길</div>
            <KakaoMap />
            <div className="adress_text_wrap">
                <table>
                    <tbody>
                        <tr>
                            <th>도로명 주소: </th>
                            <td>서울특별시 강남구 언주로 508</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Address