import CopyToClipboard from "react-copy-to-clipboard";


const Copy = ({children, text, onCopy}) => {
    
    function onCopyHandler() {
        if(onCopy) return onCopy;
        else alert(`${text}\n복사되었습니다.`);
    };
    
    return (
        <CopyToClipboard text={text} onCopy={onCopyHandler}>
            {children}
        </CopyToClipboard>
    )
};

export default Copy;