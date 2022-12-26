import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { UserProps } from "../Tool-mum/User";
import { v4 as uuidv4 } from "uuid";

export default function ModalTool({
  close,
  item,
  _id,
  username,
  pass,
  aimant,
  badge,
  poste,
  onEdit,
}: {
  close?: any;
  item?: (arg0: UserProps) => void;
  _id?: string;
  username?: string;
  pass?: boolean;
  aimant?: boolean;
  badge?: boolean;
  poste?: string;
  onEdit?: boolean;
}) {
  let [isOpen, setIsOpen] = useState(true);
  const [user, setUser] = useState<UserProps>({
    id: uuidv4(),
    username: "",
    pass: false,
    aimant: false,
    badge: false,
    poste: "CDI",
  });

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Remplir un user
                  </Dialog.Title>
                  <div className="flex-col">
                    <div className="flex p-2 w-full items-center">
                      Nom
                      <input
                        type="text"
                        placeholder={onEdit ? username : " "}
                        className="bg-slate-200 m-2"
                        onChange={(el) =>
                          setUser({
                            ...user,
                            username: el.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="flex p-2 w-full">
                      <span role="img" aria-label="pass">
                        💳
                      </span>{" "}
                      <input
                        type="checkbox"
                        className="ml-[20px] bg-slate-200"
                        onChange={(el) =>
                          setUser({
                            ...user,
                            pass:
                              el.target.value.toLowerCase() === "true"
                                ? true
                                : false,
                          })
                        }
                      />
                    </div>
                    <div className="flex p-2">
                      <span role="img" aria-label="aimant">
                        🧲
                      </span>{" "}
                      <input
                        type="checkbox"
                        className="ml-[20px] bg-slate-200"
                        onChange={(el) =>
                          setUser({
                            ...user,
                            aimant:
                              el.target.value.toLowerCase() === "true"
                                ? true
                                : false,
                          })
                        }
                      />
                    </div>

                    <div className="flex p-2">
                      <span role="img" aria-label="badge">
                        🪪
                      </span>{" "}
                      <input
                        type="checkbox"
                        className="ml-[20px] bg-slate-200"
                        onChange={(el) =>
                          setUser({
                            ...user,
                            badge:
                              el.target.value.toLowerCase() === "true"
                                ? true
                                : false,
                          })
                        }
                      />
                    </div>

                    <div className="flex p-2 w-full items-center">
                      Poste
                      <input
                        type="text"
                        placeholder={onEdit ? poste : " "}
                        className="bg-slate-200 m-2"
                        onChange={(el) =>
                          setUser({
                            ...user,
                            poste: el.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={() => {
                          close?.(false);
                          if (onEdit) {
                            setUser({ ...user, id: _id! });
                          }
                          item?.(user);
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
