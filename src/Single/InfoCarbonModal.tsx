import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import classNames from "classnames";

export default function InfoCarbonModal({
  close,
  list,
}: {
  close: any;
  list: Map<string, number>;
}) {
  let [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => close?.(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-xl mb-4 font-medium leading-6 text-gray-900"
                  >
                    The goal is to compute the{" "}
                    <p className="font-bold">carbon footprint</p> of your meal.
                  </Dialog.Title>
                  <div className="flex-col">
                    <div>
                      {Array.from(list.entries()).map(([key, value]) => (
                        <>
                          <div className="flex justify-between">
                            <p className="p-1"> {key}</p>
                            <p
                              className={classNames(
                                "px-3",
                                value <= 10
                                  ? "text-green-400 bg-green-100"
                                  : value <= 30
                                  ? "text-orange-400 bg-orange-100"
                                  : "text-red-400 bg-red-100"
                              )}
                              style={{ width: value * 5 }}
                            >
                              {" "}
                              {value}
                            </p>
                          </div>
                        </>
                      ))}
                    </div>
                    <div className="mt-3 font-bold"> (source: IPCC 2018)</div>
                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={() => {
                          close?.(false);
                        }}
                      >
                        OK !
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
