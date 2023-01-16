import { IngredientProps } from "../Views/CarbonCalculator/Ingredient";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export const MapIngredient = new Map<string, number>([
  ["Beef", 100],
  ["Chocolate", 45],
  ["Coffee", 28],
  ["Seafood (farmed)", 27],
  ["Lamb", 24],
  ["Cheese", 23],
  ["Fish (farmed)", 13],
  ["Pork", 12],
  ["Poultry", 10],
  ["Palm oil", 7],
  ["Soy oil", 6],
  ["Olive oil", 5.4],
  ["Egg", 5],
  ["Rice", 4],
  ["Soy", 3],
  ["Sugar", 3],
  ["Milk", 3],
  ["Wine", 2],
  ["Bread", 1.6],
  ["Beer", 1.2],
  ["Fruit", 1],
  ["Peas", 0.5],
  ["Vegetables", 1],
]);

export default function ComputeResult({
  list,
  close,
}: {
  list: IngredientProps[];
  close: any;
}) {
  let [isOpen, setIsOpen] = useState(true);
  const result = list.reduce(
    (acc, i) => acc + (MapIngredient.get(i.name) || 0) * i.value,
    0
  );

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
                    className="text-xl font-medium leading-6 text-gray-900"
                  >
                    Carbon footprint of your meal:
                  </Dialog.Title>
                  <div className="flex-col">
                    <div className="flex p-2 w-full text-3xl items-center">
                      {result >= 2 ? (
                        <div className="text-5xl p-2 text-red-500">
                          {" "}
                          {result}
                        </div>
                      ) : (
                        <div className="text-5xl p-2 text-green-500">
                          {" "}
                          {result}
                        </div>
                      )}{" "}
                      kgC02eq
                    </div>
                    <div> The average for a French citizen is 2 kgCO2eq!</div>

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
