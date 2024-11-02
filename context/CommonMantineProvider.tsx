// Mantine - Components
import { ModalsProvider } from "@mantine/modals";
import { MantineProvider } from "@mantine/core";

// Atlas config
import { mantineConfig } from "../config";

// Mantine providers with configuration that should be wrapped around each
// Nested React app. Idk why plugins don't have access to surrounding context.
const CommonMantineProvider = ({ children }: ComponentBaseProps) => {
  return (
    <MantineProvider {...mantineConfig}>
      <ModalsProvider>{children}</ModalsProvider>
    </MantineProvider>
  );
};

export default CommonMantineProvider;
export { CommonMantineProvider };
