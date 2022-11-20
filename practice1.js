function getcommentinput() {
    var inputText = document.getElementById("comment-input").value; // 변수 inputText는 = comment-input가 아이디인 애로 입력받은 거 중에 입력한 텍스트의 value라고 한다.
    alert('응원이 완료되었습니다!');
    // 변수 inputText에 '인삼 화이팅!' 들어있는 상태
    document.getElementById('comments').innerText = inputText;  // comments 아이디인 애의 텍스트를 inputText로 바꿔라
    document.getElementById('comment-input').value = ''; // comment-input 아이디 인 애 value(글자)를 ''빈칸으로 바꿔라
}

const inputBar = document.querySelector("#comment-input"); // 변수 inputBar는 = 입력된 댓글창 
const rootDiv = document.querySelector("#comments"); // 변수 rootdiv = 남겨진 댓글 
const btn = document.querySelector("#submit"); //btn = '제출'이라고 써있는 버튼
const mainCommentCount = document.querySelector("#count"); // 변수 mainCommentCount = 댓글 숫자 

// 댓글 보여주기
function showComment(comment) {
    const inputValue = document.createElement('span');  // inputvalue = 빈 span 하나 생성
    const countSpan = document.createElement('span'); // countSpan = 빈 span 하나 생성
    const commentList = document.createElement('div'); // commentList = 빈 div 하나 생성 // (?) 얘가 스코프 밖으로 나가는 순간 하나 지우면 다 지워지고 입력하면 리스트 다 불러옴

    // 입력값 넘기기 
    inputValue.innerText = comment;// inputValue = 안을 comment 로 바꾸는 것 (비어있어서 사실 추가)

    // 댓글 뿌려주기
    commentList.appendChild(inputValue);  // inputValue (= comment)를 commentList에 추가
    rootDiv.prepend(commentList); // rootDiv 앞에 commentList(=comment 모여있는 거) // prepend(:앞에 삽입) 
}

// 버튼만들기 + 입력값전달
function pressBtn() {
    const currentVal = inputBar.value; // currenVal이라는 함수는 inputBar(=입력된 댓글창)의 value(입력된 글자값)이다.
    if (!currentVal.length) {
        alert("댓글을 입력해주세요!")
    } else {
        showComment(currentVal); // showComment(함수=()에 받은애를 inputValue에 넣어서 commentList로 보내는 거) 
                                 // -> currentVal을 commentList에 보내는 거
        mainCommentCount.innerHTML++; //mainCommentCount(댓글숫자 변수(아)) = 안의 텍스트에 1 증가시켜라
        inputBar.value = ''; // 제출 후 창 비우기
    }
}

btn.onclick = pressBtn; // 버튼 누르면 함수 pressBtn 실행


// 참고
// Append to body 기능:
// document.body.appendChild(para);