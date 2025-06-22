function Header() {
  return (
    <div className="bg-white h-16 w-6xl mx-auto sticky top-0 flex justify-between items-center px-8">
      <div aria-label="메뉴">
        <svg className="w-8 h-8 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
        </svg>
      </div>
      <button type="button" className="cursor-pointer bg-green-700 py-2 px-4 rounded-4xl text-white">
        로그인
      </button>
    </div>
    //   {/* 햄버거 바를 누르면 if를 통해 toggle되는 방식으로 */}
    //   {/* <ul>
    //     <li>대시보드</li>
    //     <li>오늘의 일기</li>
    //     <li>글 쓰기</li>
    //     <li>오늘의 운동</li>
    //   </ul> */}
  );
}

export default Header;
