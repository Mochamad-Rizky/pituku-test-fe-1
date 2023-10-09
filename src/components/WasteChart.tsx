"use client";

import { formatDateYYYYMMDD } from "@/utils/formateDate";
import ApexChart from "@/components/ui/ApexChart";
import { useCallback, useEffect, useState } from "react";

type WasteData = {
  data: {
    data: number[];
    label: string[];
  };
};

export default function WasteChart() {
  const [data, setData] = useState<{
    data: number[];
    label: string[];
  }>({
    data: [],
    label: [],
  });

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState<boolean | null>(null);

  const getWasteDataChart = useCallback(async () => {
    try {
      setIsLoading(true);

      const startDateRange = new Date();
      startDateRange.setDate(startDateRange.getDate() - 30);
      const currentDate = new Date();

      const startDate = formatDateYYYYMMDD(startDateRange);
      const endDate = formatDateYYYYMMDD(currentDate);

      const response = await fetch(
        `https://api.pituku.id/api/dashboard/price-history/waste-sub-category-20a3e098-8d0f-424a-ab7c-e63e533fda3d/daily?startDate=${startDate}&endDate=${endDate}`,
      );
      const { data: wasteData } = (await response.json()) as WasteData;
      setData({
        data: wasteData.data,
        label: wasteData.label,
      });
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getWasteDataChart();
  }, [getWasteDataChart]);

  const options: ApexCharts.ApexOptions = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: "smooth",
      width: 4,
    },
    colors: ["#DCE6EC"],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100],
      },
    },
    dataLabels: {
      enabled: false,
    },
    labels: data.label,
    yaxis: {
      labels: {
        formatter: function (val: number) {
          return (val / 1000).toFixed(1) + "rb";
        },
      },
    },
    xaxis: {
      labels: {
        show: false,
      },
    },
    grid: {
      show: false,
    },
  };

  return (
    <>
      {isLoading && (
        <div className="mt-6 h-[300px] w-full animate-pulse rounded-md bg-slate-700/50"></div>
      )}
      {!isLoading && isError && (
        <div className="h-[300px] w-full">
          <p className="text-center text-red-500">Terjadi Kesalahan</p>
        </div>
      )}
      {!isLoading && !isError && (
        <ApexChart
          type="area"
          height={400}
          options={options}
          series={[
            {
              name: "PET BENING",
              data: data.data,
            },
          ]}
        />
      )}
    </>
  );
}
