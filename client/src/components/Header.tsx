import { useState } from "react";
import { Link } from "react-router";

function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <>
      <header className="bg-white h-16 w-6xl mx-auto flex justify-between items-center px-8">
        <div aria-label="메뉴">
          <svg onClick={() => setIsOpenMenu(!isOpenMenu)} className="w-8 h-8 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
          </svg>
        </div>
        <button type="button" className="cursor-pointer bg-green-700 py-2 px-4 rounded-4xl text-white">
          로그인
        </button>
      </header>
      {isOpenMenu && (
        <>
          <div className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${isOpenMenu ? "opacity-100 visible" : "opacity-0 invisible"}`} onClick={() => setIsOpenMenu(false)}></div>

          <nav
            className={`fixed top-0 left-0 w-60 h-screen bg-white z-50 shadow-lg p-4 flex flex-col gap-4 transform transition-transform duration-300 ${
              isOpenMenu ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <p className="text-xl font-bold px-4 pt-4">😶‍🌫️ 메뉴</p>
            <hr />
            <ul className="flex flex-col gap-2">
              <li onClick={() => setIsOpenMenu(false)}>
                <Link to="/" className="hover:bg-gray-200 bg-gray-50 rounded-md p-4 transition-all cursor-pointer flex flex-row items-center gap-3 text-lg">
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
                  </svg>
                  <span>메인</span>
                </Link>
              </li>
              <li onClick={() => setIsOpenMenu(false)}>
                <Link to="/diary" className="hover:bg-gray-200 bg-gray-50 rounded-md p-4 transition-all cursor-pointer flex flex-row items-center gap-3 text-lg">
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
                  </svg>
                  <span>일기장</span>
                </Link>
              </li>
              <li onClick={() => setIsOpenMenu(false)}>
                <Link to="/" className="hover:bg-gray-200 bg-gray-50 rounded-md p-4 transition-all cursor-pointer flex flex-row items-center gap-3 text-lg">
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path d="M160 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM126.5 199.3c-1 .4-1.9 .8-2.9 1.2l-8 3.5c-16.4 7.3-29 21.2-34.7 38.2l-2.6 7.8c-5.6 16.8-23.7 25.8-40.5 20.2s-25.8-23.7-20.2-40.5l2.6-7.8c11.4-34.1 36.6-61.9 69.4-76.5l8-3.5c20.8-9.2 43.3-14 66.1-14c44.6 0 84.8 26.8 101.9 67.9L281 232.7l21.4 10.7c15.8 7.9 22.2 27.1 14.3 42.9s-27.1 22.2-42.9 14.3L247 287.3c-10.3-5.2-18.4-13.8-22.8-24.5l-9.6-23-19.3 65.5 49.5 54c5.4 5.9 9.2 13 11.2 20.8l23 92.1c4.3 17.1-6.1 34.5-23.3 38.8s-34.5-6.1-38.8-23.3l-22-88.1-70.7-77.1c-14.8-16.1-20.3-38.6-14.7-59.7l16.9-63.5zM68.7 398l25-62.4c2.1 3 4.5 5.8 7 8.6l40.7 44.4-14.5 36.2c-2.4 6-6 11.5-10.6 16.1L54.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L68.7 398z" />
                  </svg>
                  <span>운동 기록</span>
                </Link>
              </li>
              <li onClick={() => setIsOpenMenu(false)}>
                <Link to="/" className="hover:bg-gray-200 bg-gray-50 rounded-md p-4 transition-all cursor-pointer flex flex-row items-center gap-3 text-lg">
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M40 48C26.7 48 16 58.7 16 72l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24L40 48zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM16 232l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0z" />
                  </svg>
                  <span>할 일 리스트</span>
                </Link>
              </li>
              <li onClick={() => setIsOpenMenu(false)}>
                <Link to="/" className="hover:bg-gray-200 bg-gray-50 rounded-md p-4 transition-all cursor-pointer flex flex-row items-center gap-3 text-lg">
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                  </svg>
                  <span>유튜브 리스트</span>
                </Link>
              </li>
            </ul>
          </nav>
        </>
      )}
    </>
  );
}

export default Header;
