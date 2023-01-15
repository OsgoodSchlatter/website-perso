import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { ConsoProps } from "../Views/SNCFCockpit/SingleConso";
import { v4 as uuidv4 } from "uuid";

export default function ModalTool({
  close,
  edit,
  item,
  _conso,
  onEdit,
}: {
  close?: any;
  edit?: any;
  item?: (arg0: ConsoProps) => void;
  _conso?: ConsoProps;
  onEdit?: boolean;
}) {
  let [isOpen, setIsOpen] = useState(true);
  const [conso, setConso] = useState<ConsoProps>({
    id: uuidv4(),
    chaineMetier: _conso?.chaineMetier!,
    value: _conso?.value!,
    url: _conso?.url!,
    seuil: _conso?.seuil!,
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
            <div
              className="fixed inset-0 bg-black bg-opacity-25"
              onBlur={() => {
                close?.(false);
                console.log("isopen: " + isOpen + " close " + close);
              }}
            />
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
                    Remplir une conso
                  </Dialog.Title>
                  <div className="flex-col">
                    <div className="flex p-2 w-full items-center">
                      Nom
                      <input
                        type="text"
                        id="name"
                        placeholder={onEdit ? _conso?.chaineMetier : " test "}
                        className="bg-slate-200 m-2"
                        onChange={(el) => {
                          setConso({
                            ...conso,
                            chaineMetier: el.target.value,
                          });
                        }}
                      />
                    </div>

                    <div className="flex p-2 w-full items-center">
                      Value
                      <input
                        id="value"
                        type="number"
                        placeholder={onEdit ? _conso?.value.toString() : "0"}
                        className="bg-slate-200 m-2"
                        onChange={(el) =>
                          setConso({
                            ...conso,
                            value: el.currentTarget.valueAsNumber,
                          })
                        }
                      />
                    </div>

                    <div className="flex p-2 w-full items-center">
                      Seuil
                      <input
                        id="value"
                        type="number"
                        placeholder={onEdit ? _conso?.seuil.toString() : "0"}
                        className="bg-slate-200 m-2"
                        onChange={(el) =>
                          setConso({
                            ...conso,
                            seuil: el.currentTarget.valueAsNumber,
                          })
                        }
                      />
                    </div>

                    <div className="flex p-2 w-full items-center">
                      URL
                      <input
                        id="url"
                        type="text"
                        placeholder={onEdit ? _conso?.url : ""}
                        className="bg-slate-200 m-2"
                        onChange={(el) =>
                          setConso({
                            ...conso,
                            url: el.currentTarget.value,
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
                            setConso({ ...conso, id: _conso?.id! });
                            edit?.(false);
                          }
                          item?.(conso);
                          console.log("isopen: " + isOpen + " close " + close);
                        }}
                      >
                        OK !
                      </button>
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 m-4 px-4 py-2 text-sm font-medium text-red-500 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={() => {
                          close?.(false);
                        }}
                      >
                        Leave Modal
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
