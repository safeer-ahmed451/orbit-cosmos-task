"use client";
import { useEffect, useState } from 'react'
import styles from "./styles.module.scss"
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Transition,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import OptimizeImage from '@/components/optimizeImage/optimizeImage';
import Link from 'next/link';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const MainHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  }, []);

  return (
    <header className={(scroll ? "headerSticky" : "") +" "+"headerFixed"}>
      <div className="container mx-auto">
      <nav className="mx-auto flex items-center justify-between p-12 px-0" aria-label="Global">
        <div className={styles.logoCol +" "+ "flex lg:flex-1"}>
          <Link href={"/"} className="-m-1.5 p-1.5 relative">
            <span className="sr-only">Your Company</span>
              <OptimizeImage
                alt="img"
                src={"/assets/svg/logo.svg"}
              />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white-700 menuToggle"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <PopoverGroup className={styles.navItems +" " + "hidden lg:flex lg:gap-x-14"}>
            <Link href={"/"} className="text-lg font-semibold leading-6 text-white">
              Home
            </Link>
            <Link href={"/about"} className="text-lg font-semibold leading-6 text-white">
              About
            </Link>
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-lg font-semibold leading-6 text-white">
              Pages +
            </PopoverButton>

            <Transition
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <PopoverPanel className="absolute dropPanel -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                    <div
                      className="group relative block items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <Link href="#" className="text-lg block font-semibold leading-6 text-white">
                          Projects
                      </Link>
                      <Link href="#" className="text-lg block py-6 font-semibold leading-6 text-white">
                          About
                      </Link><Link href="#" className="text-lg block font-semibold leading-6 text-white">
                          Blogs
                      </Link>
                    </div>
                </div>
              </PopoverPanel>
            </Transition>
          </Popover>
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-lg font-semibold leading-6 text-white">
              Services +
            </PopoverButton>

            <Transition
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <PopoverPanel className="absolute dropPanel -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                    <div
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <Link href="#" className="text-lg font-semibold leading-6 text-white">
                          Projects
                      </Link>
                    </div>
                </div>
              </PopoverPanel>
            </Transition>
          </Popover>
          <Link href="#" className="text-lg font-semibold leading-6 text-white">
              Projects
          </Link>
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-lg font-semibold leading-6 text-white">
              Blogs +
            </PopoverButton>

            <Transition
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <PopoverPanel className="absolute dropPanel -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                    <div
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <Link href="#" className="text-lg font-semibold leading-6 text-white">
                          Projects
                      </Link>
                    </div>
                </div>
              </PopoverPanel>
            </Transition>
          </Popover>
        </PopoverGroup>
        <div className={styles.dotsToggle +" "+ "hidden lg:flex lg:flex-1 lg:justify-end"}>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900 relative">
          <OptimizeImage
                alt="img"
                src={"/assets/svg/menu.svg"}
              />
          </a>
        </div>
      </nav>
      </div>
      <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 mobileSideNav">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
              <Link href={"/"} className="text-lg px-3 py-2 block font-semibold leading-6 text-white">
                Home
              </Link>
              <Link href={"/about"} className="text-lg px-3 py-2 block font-semibold leading-6 text-white">
                About
              </Link>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <DisclosureButton className="flex w-full items-center justify-between text-lg px-5 py-2 font-semibold leading-6 text-white">
                        Pages
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                      <Link href={"/about"} className="text-lg px-5 py-2 block font-semibold leading-6 text-white">
                        About
                      </Link>
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <DisclosureButton className="flex w-full items-center justify-between text-lg px-5 py-2 font-semibold leading-6 text-white">
                        Services
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                      <Link href={"/about"} className="text-lg px-5 py-2 block font-semibold leading-6 text-white">
                        About
                      </Link>
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>
                <Link href={"/about"} className="text-lg px-3 py-2 block font-semibold leading-6 text-white">
                  Projects
                </Link>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <DisclosureButton className="flex w-full items-center justify-between text-lg px-5 py-2 font-semibold leading-6 text-white">
                        Blogs
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                      <Link href={"/about"} className="text-lg px-5 py-2 block font-semibold leading-6 text-white">
                        About
                      </Link>
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}



export default MainHeader;
