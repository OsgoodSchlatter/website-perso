import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { IngredientProps } from "../Views/CarbonCalculator/Ingredient";
import { v4 as uuidv4 } from "uuid";
import { MealProps } from "../Views/CarbonCalculator/DisplayIngredients";

export default function ModalSaveMeal({
  close,
  edit,
  item,
  ingrList,
  onEdit,
  _meal,
}: {
  close: any;
  edit?: any;
  item: (arg0: MealProps) => void;
  ingrList: IngredientProps[];
  _meal?: MealProps;
  onEdit?: boolean;
}) {
  let [isOpen, setIsOpen] = useState(true);
  const [meal, setMeal] = useState<MealProps>({
    id: uuidv4(),
    id_number: _meal?.id_number!,
    name: _meal?.name!,
    meal: _meal?.meal!,
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
              setMeal({ ...meal, id: _meal?.id! });
              item?.(meal);
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
                    Create your meal !
                  </Dialog.Title>
                  <div className="flex-col">
                    <div className="flex m-2 justify-between">
                      Name of the meal
                      <input
                        id="name"
                        type="text"
                        className="ml-[92px] bg-slate-200"
                        onChange={(el) =>
                          setMeal({
                            ...meal,
                            name: el.target.value,
                          })
                        }
                      ></input>
                    </div>

                    <div className="flex m-2 justify-between">
                      Number
                      <input
                        id="number"
                        type="number"
                        className="ml-[92px] bg-slate-200"
                        onChange={(el) =>
                          setMeal({
                            ...meal,
                            id_number: el.currentTarget.valueAsNumber,
                          })
                        }
                      ></input>
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={() => {
                          close?.(false);
                          if (onEdit) {
                            edit?.(false);
                            setMeal({ ...meal, id: _meal?.id! });
                          }
                          item?.(meal);
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
