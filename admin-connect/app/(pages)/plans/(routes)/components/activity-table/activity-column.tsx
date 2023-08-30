"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ActivityStatus } from "@prisma/client";
import { StatusPill } from "@/components/status-pill";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ActivityInput } from "./activity-input";

export type ActivityColumn = {
  id: string;
  name: string;
  status: ActivityStatus;
  description: string;
  videoUrl: string;
};

export const columns: ColumnDef<ActivityColumn>[] = [
  {
    id: "name",
    header: "Name",
    cell: ({ row }) => {
      const {
        original: { id },
      } = row;
      return <ActivityInput activityId={id} inputKey="name" key={id} />;
    },
  },
  {
    id: "tag_1",
    header: "Tag 1",
  },
  {
    id: "tag_2",
    header: "Tag 2",
  },
  {
    id: "tag_3",
    header: "Tag 3",
  },
  {
    id: "tag_4",
    header: "Tag 4",
  },
  {
    id: "tag_5",
    header: "Tag 5",
  },
  {
    id: "tag_6",
    header: "Tag 6",
  },
  {
    id: "controls",
    header: "Controls",
    cell: ({ row }) => (
      <div className="flex space-x-2" key={row.original.id}>
        <StatusPill status={row.original.status} />
        <ActivityInput activityId={row.original.id} inputKey="videoUrl" key={`video-url-${row.original.id}`} />
        <ActivityInput activityId={row.original.id} inputKey="description" key={`description-${row.original.id}`} />
      </div>
    ),
  },
];
