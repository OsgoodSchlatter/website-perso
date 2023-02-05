import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { IngredientProps } from "../Views/CarbonCalculator/Ingredient";
import { v4 as uuidv4 } from "uuid";
import { MealProps } from "../Views/CarbonCalculator/DisplayIngredients";
import classNames from "classnames";
import { BsFillTrashFill } from "react-icons/bs";
import { Button } from "./Button";

export default function ModalMeals({
  close,
  edit,
  item,
  onEdit,
  _listMeal,
  pickMeal,
  handleDelete,
  handleAllDelete,
}: {
  close?: any;
  edit?: any;
  item?: (arg0: MealProps[]) => void;
  onEdit?: boolean;
  _listMeal: MealProps[];
  pickMeal: (a: number) => void;
  handleDelete: (id: string) => any;
  handleAllDelete: () => any;
}) {
  let [isOpen, setIsOpen] = useState(true);

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
                    <div className="flex justify-between items-center">
                      Select a meal{" "}
                      {/* <Button
                        label={<BsFillTrashFill />}
                        className="rounded-md bg-red-400 hover:bg-red-500 ml-2 text-black"
                        onClick={() => handleAllDelete()}
                      /> */}
                    </div>
                  </Dialog.Title>
                  <div className="flex-col">
                    {_listMeal.map((meal: MealProps) => (
                      <>
                        <div className="flex items-center">
                          <div
                            className="rounded-xl flex-fill m-4 p-2 bg-orange-300 hover:bg-orange-400"
                            id={meal.id}
                            onClick={() => {
                              pickMeal(meal.id_number);
                              close?.(false);
                              item?.(_listMeal);
                            }}
                          >
                            {meal.name}
                          </div>
                          <Button
                            label={<BsFillTrashFill />}
                            className="rounded-md bg-red-400 hover:bg-red-500 ml-2 text-black"
                            onClick={() => handleDelete?.(meal.id)}
                          />
                        </div>
                      </>
                    ))}
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
