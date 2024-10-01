import React from 'react';
import logo from 'assets/img/logo_sabara.png';

const UserCard = ({ user, level = 1 }) => {
  return (
    <li className="mb-4">
      <a href=" ">
        <div className="w-full sm:w-24 lg:w-24 text-gray-800 rounded-[8px] p-[5px] shadow-md flex flex-col items-center bg-gray-200">
          {/* Avatar with the first letter of username */}
          <div className="rounded-full bg-white h-8 w-8 md:w-12 md:h-12 flex items-center justify-center p-2 mb-2">
            <span className="font-bold text-xl">{user.username.charAt(0).toUpperCase()}</span>
          </div>

          {/* Username */}
          <p className="md:text-sm text-[11px] md:mb-1 text-center">
            {user ? user.username : "Loading..."}
          </p>

          {/* Left and Right Counts */}
          <div className="grid grid-cols-2 w-full">
            <div className="flex flex-col items-center m-0 p-0">
              <span className="m-0">Kiri</span>
              <span className="m-0">{user.count_left}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="m-0">Kanan</span>
              <span className="m-0">{user.count_right}</span>
            </div>
          </div>
        </div>
      </a>

      {/* Render Downline Recursively */}
      {user.downline && user.downline.length > 0 ? (
        <ul className="mt-2 ml-8 w-full">
          {user.downline.map((dwn, index) => (
            <UserCard key={index} user={dwn} level={level + 1} />
          ))}
        </ul>
      ) : (
        level < 3 && (
          <ul className="mt-2 ml-8 w-full">
            {/* Render Add User Buttons when no downline and up to level 2 */}
            <li className="mb-4">
              <a href=" ">
                <div className="w-full sm:w-24 lg:w-24 text-gray-800 rounded-[8px] p-[5px] shadow-md flex flex-col items-center bg-gray-200">
                  <div className="rounded-full bg-white h-8 w-8 md:w-12 md:h-12 flex items-center justify-center p-2 mb-2">
                    <img src={logo} alt="Logo Sebara" className="w-full h-full" />
                  </div>
                  <p className="bg-brand-400 text-[11px] mt-3 w-full py-1 text-white rounded-[8px]">
                    Daftar
                  </p>
                </div>
              </a>
            </li>

            <li className="mb-4">
              <a href=" ">
                <div className="w-full sm:w-24 lg:w-24 text-gray-800 rounded-[8px] p-[5px] shadow-md flex flex-col items-center bg-gray-200">
                  <div className="rounded-full bg-white h-8 w-8 md:w-12 md:h-12 flex items-center justify-center p-2 mb-2">
                    <img src={logo} alt="Logo Sebara" className="w-full h-full" />
                  </div>
                  <p className="bg-brand-400 text-[11px] mt-3 w-full py-1  text-white rounded-[8px]">
                    Daftar
                  </p>
                </div>
              </a>
            </li>
          </ul>
        )
      )}
    </li>
  );
};

export default UserCard;
