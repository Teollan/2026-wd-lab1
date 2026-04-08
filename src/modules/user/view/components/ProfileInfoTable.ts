import { PureComponent } from "@/modules/core/component";

interface InfoEntry {
  label: string;
  value: string;
}

interface Props {
  entries: InfoEntry[];
}

const InfoTableEntry: PureComponent<InfoEntry> = ({ label, value }) => {
  return /*html*/`
    <tr class="align-top">
      <td class="py-3 pr-4 font-medium text-content-secondary whitespace-nowrap">
        ${label}
      </td>

      <td class="w-full py-3">
        ${value}
      </td>
    </tr>
  `;
}

export const ProfileInfoTable: PureComponent<Props> = ({ entries }) => {
  return /*html*/`
    <table class="w-full">
      <tbody class="divide-y divide-stroke-primary text-sm text-content-primary">
        ${entries.map((entry) => (
          InfoTableEntry(entry)
        )).join("")}
      </tbody>
    </table>
  `;
}
