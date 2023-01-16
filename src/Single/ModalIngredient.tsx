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
  list,
}: {
  close?: any;
  edit?: any;
  item?: (arg0: IngredientProps) => void;
  _ingr?: IngredientProps;
  onEdit?: boolean;
  list?: Map<string, number>;
}) {
  let [isOpen, setIsOpen] = useState(true);
  const [ingr, setIngr] = useState<IngredientProps>({
    id: uuidv4(),
    value: _ingr?.value!,
    name: _ingr?.name!,
  });

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => {
            close?.(false);
            if (onEdit) {
              edit?.(false);
              setIngr({ ...ingr, id: _ingr?.id! });
              item?.(ingr);
            }
          }}
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
                    className="text-lg m-2 font-medium leading-6 text-gray-900"
                  >
                    Pick an ingredient
                  </Dialog.Title>
                  <div className="flex-col">
                    <div className="flex m-2 justify-between">
                      Name of the ingredient
                      <select
                        className="rounded-md p-2 border border-transparent"
                        onChange={(el) =>
                          setIngr({
                            ...ingr,
                            name: el.target.value,
                          })
                        }
                        defaultValue={"beef"}
                      >
                        <option value="Beef">Beef</option>
                        <option value="Chocolate">Chocolate</option>
                        <option value="Coffee">Coffee</option>
                        <option value="Chocolate">Chocolate</option>
                        <option value="Seafood (farmed)">
                          Seafood (farmed)
                        </option>
                        <option value="Lamb">Lamb</option>
                        <option value="Cheese">Cheese</option>
                        <option value="Fish (farmed)">Fish</option>
                        <option value="Pork">Pork</option>
                        <option value="Poultry">Poultry</option>
                        <option value="Palm oil">Palm oil</option>
                        <option value="Soy oil">Soy oil</option>
                        <option value="Olive oil">Olive oil</option>
                        <option value="Egg">Egg</option>
                        <option value="Rice">Rice</option>
                        <option value="Soy">Soy</option>
                        <option value="Sugar">Sugar</option>
                        <option value="Milk">Milk</option>
                        <option value="Wine">Wine</option>

                        <option value="fruit">Fruit</option>
                        <option value="peas">Peas</option>
                        <option value="vegetable">Vegetable</option>
                      </select>
                    </div>

                    <div className="flex m-2 justify-between">
                      Value (kg)
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
                          if (onEdit) {
                            edit?.(false);
                            setIngr({ ...ingr, id: _ingr?.id! });
                            item?.(ingr);
                          }
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
