export type clickedRenderProps = {
    clicked:boolean,
    onClick: ()=>void
  }

  export type MenuItem = {
    label: React.ReactNode; // `label` can be a string or any ReactNode (e.g., JSX, string)
    key: string; // key is required for each menu item
    icon: React.ReactNode
  };

  export type FlatButtonType = {
    onClick:()=>void,
    title:String
  }

  export type SalesState = {
    labels: string[]; // Ensure this is always an array of strings
    datasets: {
      label: string; // Label for the dataset (e.g., "Total Sales")
      data: number[]; // Array of numbers for the chart data
      backgroundColor?: string | string[]; // Optional: Background color for the bars
      borderColor?: string | string[]; // Optional: Border color for the bars
      tension?:number ;
      pointBackgroundColor?: string;  // Changes point color on the line
        pointBorderColor?: string;
        borderWidth?:number;
        fill?: boolean;
    }[];
  };