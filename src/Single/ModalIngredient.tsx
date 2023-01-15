import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { IngredientProps } from "../Views/CarbonCalculator/Ingredient";
import { v4 as uuidv4 } from "uuid";

export default function ModalIngredient({
  close,
  edit,
  item,
  _ingr,
  onEdit,
}: {
  close?: any;
  edit?: any;
  item?: (arg0: IngredientProps) => void;
  _ingr?: IngredientProps;
  onEdit?: boolean;
}) {
  let [isOpen, setIsOpen] = useState(true);
  const [ingr, setIngr] = useState<IngredientProps>({
    id: uuidv4(),
    value: _ingr?.value!,
    name: _ingr?.name!,
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
                    Choisir un ingrédient
                  </Dialog.Title>
                  <div className="flex-col">
                    <div className="flex p-2 w-full">
                      Nom de l'ingrédient
                      <div className="px-4">
                        <select
                          className="p-2 rounded-md border border-transparent"
                          onChange={(el) =>
                            setIngr({
                              ...ingr,
                              name: el.target.value,
                            })
                          }
                        >
                          <option value="beef">Beef</option>
                          <option value="lamb">Lamb</option>
                          <option value="shrimp">Shrimp</option>
                          <option value="cheese">Cheese</option>
                          <option value="pork">Pork</option>
                          <option value="chicken">Chicken</option>
                          <option value="egg">Egg</option>
                          <option value="rice">Rice</option>
                          <option value="soy">Soy</option>
                          <option value="fruit">Fruit</option>
                          <option value="peas">Peas</option>
                          <option value="vegetable">Vegetable</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex p-2 w-full">
                      Valeur (kg)
                      <input
                        id="value"
                        type="number"
                        placeholder={onEdit ? _ingr?.value.toString() : "0"}
                        className="ml-[92px] bg-slate-200"
                        onChange={(el) =>
                          setIngr({
                            ...ingr,
                            value: el.currentTarget.valueAsNumber,
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
                            edit?.(false);
                            setIngr({ ...ingr, id: _ingr?.id! });
                          }
                          item?.(ingr);
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
