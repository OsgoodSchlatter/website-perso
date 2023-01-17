import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { IngredientProps } from "../Views/CarbonCalculator/Ingredient";
import { v4 as uuidv4 } from "uuid";
import { MealProps } from "../Views/CarbonCalculator/DisplayIngredients";

export default function ModalMeals({
  close,
  edit,
  item,
  onEdit,
  _listMeal,
  pickMeal,
}: {
  close?: any;
  edit?: any;
  item?: (arg0: MealProps[]) => void;
  onEdit?: boolean;
  _listMeal: MealProps[];
  pickMeal: (a: number) => void;
}) {
  let [isOpen, setIsOpen] = useState(true);
  const [listMeal, setListMeal] = useState<MealProps[]>([]);
  const [indexMeal, setIndexMeal] = useState<number>(0);

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => {
            close?.(false);
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
                    Select a meal
                  </Dialog.Title>
                  <div className="flex-col">
                    {_listMeal.map((meal: MealProps) => (
                      <>
                        <div
                          className="w-[20px] h-[20px] rounded p-4"
                          id={meal.id}
                          onClick={() => setIndexMeal(meal.id_number)}
                        >
                          {meal.name}
                        </div>
                      </>
                    ))}
                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={() => {
                          close?.(false);
                          setListMeal(listMeal);
                          pickMeal(indexMeal);
                          item?.(listMeal);
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
