/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

export enum TAB {
  FRIENDS,
  DISCOVERY,
}

type NavigationProps = {
  activeTab: TAB;
  onPressTab: (tab: TAB) => void;
};

export default function Navigation({ activeTab, onPressTab }: NavigationProps) {
  const [isTabMenuVisible, setIsTabMenuVisible] = useState(false);

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl pr-4 sm:px-6 lg:pr-8 lg:pl-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="mb-1 h-32 w-32"
                src="https://uploads-ssl.webflow.com/63e21ecfba5e96772d1ef07b/63e734395cc9360e56b24fef_logo.png"
                alt="Desoul"
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  onClick={() => onPressTab(TAB.FRIENDS)}
                  className={`${
                    activeTab === TAB.FRIENDS && "bg-gray-900"
                  } text-white rounded-md px-3 py-2 text-sm font-medium hover:cursor-pointer`}
                  aria-current="page"
                >
                  Friends
                </a>

                <a
                  onClick={() => onPressTab(TAB.DISCOVERY)}
                  className={`${
                    activeTab === TAB.DISCOVERY && "bg-gray-900"
                  } text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium hover:cursor-pointer`}
                >
                  Discovery
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button
                type="button"
                className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="sr-only">View notifications</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsTabMenuVisible(!isTabMenuVisible)}
              type="button"
              className={`inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 ${
                isTabMenuVisible &&
                "hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              }`}
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden ${isTabMenuVisible ? "block" : "hidden"}`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
          <a
            onClick={() => {
              onPressTab(TAB.FRIENDS);
              setIsTabMenuVisible(false);
            }}
            className={`${
              activeTab === TAB.FRIENDS && "bg-gray-900"
            } text-white block rounded-md px-3 py-2 text-base font-medium`}
            aria-current="page"
          >
            Friends
          </a>
          <a
            onClick={() => {
              onPressTab(TAB.DISCOVERY);
              setIsTabMenuVisible(false);
            }}
            className={`${
              activeTab === TAB.DISCOVERY && "bg-gray-900"
            } text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium`}
          >
            Discovery
          </a>
        </div>
      </div>
    </nav>
  );
}
