import { useEffect, useState } from "react";

export type ApiDataType = {
  url: RequestInfo;
};

interface Conso {
  records: any;
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
  const [conso, setConso] = useState<any>();

  useEffect(() => {
    const interval = setInterval(async () => {
      const res = await getConvertedData({ url });
      console.log("api énergie");
      console.log(res);
      setConso(res);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [url]);

  return (
    <div className="p-2 mt-2 flex rounded border-transparent bg-blue-100 px-4 py-2 font-medium  -900 hover:bg-blue-200 justify-between">
      <div>API énergie</div>
      <div>
        {conso
          ? conso.records[6].fields.consommation_brute_electricite_rte
          : ""}
      </div>
    </div>
  );
};
