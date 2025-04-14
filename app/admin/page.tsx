import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"
import { SiteHeader } from "@/components/site-header"

import data from "../dashboard/data.json"

export default function AdminPage() {
  return (
    <>
      <SiteHeader />
      <div className="px-4 lg:px-6">
        <h1 className="text-3xl font-bold mb-6">Panel Administrativo</h1>
        <SectionCards />
        <div className="my-6">
          <ChartAreaInteractive />
        </div>
        <DataTable data={data} />
      </div>
    </>
  )
} 