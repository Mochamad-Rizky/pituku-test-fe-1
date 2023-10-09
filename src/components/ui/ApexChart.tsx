"use client";

import { useState, useEffect } from "react";
import { Props } from "react-apexcharts";

export default function ApexChart(props: Props) {
  const [Chart, setChart] = useState<any>();

  useEffect(() => {
    import("react-apexcharts").then((mod) => {
      setChart(() => mod.default);
    });
  }, []);

  return Chart && <Chart {...props} />;
}
