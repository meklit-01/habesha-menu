"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { etb } from "../../lib/format";

const formatEtb = (value) => etb.format(value);

export default function RevenueChart({ data }) {
  return (
    <div style={{ height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="category" />
          <YAxis tickFormatter={formatEtb} width={110} />
          <Tooltip formatter={formatEtb} />
          <Bar dataKey="revenue" name="Revenue" fill="#8a4b1c" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
