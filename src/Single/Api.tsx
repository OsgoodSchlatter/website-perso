import { useEffect, useState } from "react";

export type ApiDataType = {
  url: RequestInfo;
};

interface Conso {
  departures: any;
}

async function getConvertedData({ url }: ApiDataType): Promise<Conso> {
  const response = await fetch(url, {
    method: "GET",
    headers: { Authorization: "5f710a5b-2f7a-4292-a48d-184c3f52c8d2" },
  })
    .then((response) => response.json())
    .then((response) => {
      return response as Conso;
    });

  return response;
}

// ajouter un catch

export const FetchData = ({ url }: ApiDataType) => {
  const [conso, setConso] = useState<Conso>();

  useEffect(() => {
    const interval = setInterval(async () => {
      const res = await getConvertedData({ url });
      console.log(res);
      setConso(res);
    }, 30000);
    return () => {
      clearInterval(interval);
    };
  }, [url]);

  return (
    <div className="p-2 mt-2 flex rounded border-transparent bg-blue-100 px-4 py-2 font-medium text-blue-900 hover:bg-blue-200 justify-between">
      <div>
        Exemple d'utilisation de l'api SNCF (en attendant celle des centres de
        maintenance): donne les prochain train au départ de Montparnasse (update
        toutes les 5 minutes)
      </div>
      <div className="text-black">
        {" "}
        {conso?.departures[0].display_informations.direction}
      </div>
      <div className="text-black">
        {" "}
        {conso?.departures[1].display_informations.direction}
      </div>
      <div className="text-black">
        {" "}
        {conso?.departures[2].display_informations.direction}
      </div>
    </div>
  );
};
