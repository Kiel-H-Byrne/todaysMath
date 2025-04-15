import {
  Box,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from "@material-ui/core";
import IconWrapper from "src/components/IconWrapper";
import { useMyTheme } from "src/context/ThemeContext";
import { getMyTheme } from "src/styles/themes";

const heading = "TodaysMath Technology Stack";

const frontendTechs = [
  ["Next.js", "The React framework", <IconWrapper name="SiNextdotjs" />],
  [
    "React",
    "For building UIs through components",
    <IconWrapper name="SiReact" />,
  ],
  ["TypeScript", "This is the way...", <IconWrapper name="SiTypescript" />],
  [
    "Material UI",
    "React component library that implements Google's Material Design",
    <IconWrapper name="SiMui" />,
  ],
  [
    "React Icons",
    "Quickly implement vector icons",
    <IconWrapper name="SiSketch" />,
  ],
  [
    "Google Firebase",
    "Firebase API for React",
    <IconWrapper name="SiFirebase" />,
  ],
];

const toolingTech = [
  [
    "ESLint",
    "Identifying and reporting on patterns in JavaScript",
    <IconWrapper name="SiEslint" />,
  ],
  [
    "Vercel CLI",
    "The command-line interface for Vercel",
    <IconWrapper name="SiVercel" />,
  ],
  // [
  //   "Visual Studio Code",
  //   "A code editor for web development",
  //             <IconWrapper name="SiVisualstudio" />,
  // ],
  [
    "Prettier",
    "An opinionated code formatter enforcing consistencies",
    <IconWrapper name="SiPrettier" />,
  ],
];

const infrastructureTech = [
  [
    "Vercel",
    "Provides CDN networking, atomic deployments, & DNS management",
    <IconWrapper name="SiVercel" />,
  ],
  [
    "Google Analytics",
    "Measure advertising ROI as well as track page events and SEO.",
    <IconWrapper name="SiGoogleanalytics" />,
  ],
  [
    "Github",
    "Provides code hosting and version control",
    <IconWrapper name="SiGithub" />,
  ],
];
const methodologiesTech = [
  [
    "PWA",
    "Progressive Web App (PWA) for offline support",
    <IconWrapper name="SiPwa" />,
  ],
  [
    "Responsive Design",
    "Site adapts smoothly across all device sizes",
    <IconWrapper name="DiResponsive" />,
  ],
  [
    "Git Workflow",
    "Following proven practices like branching, PRs, semantic versioning",
    <IconWrapper name="SiGit" />,
  ],
];

export default function TechPage() {
  const { mode } = useMyTheme();
  const theme = getMyTheme(mode);
  const bg_fg_color = theme.palette.primary.main;
  const urlEncodedColor = encodeURIComponent(bg_fg_color);
  const patternOpacity = 0.2;

  return (
    <Grid
      container
      style={{
        padding: "3em",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='199' viewBox='0 0 100 199'%3E%3Cg fill='${urlEncodedColor}' fill-opacity='${patternOpacity}'%3E%3Cpath d='M0 199V0h1v1.99L100 199h-1.12L1 4.22V199H0zM100 2h-.12l-1-2H100v2z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      <Typography variant="h1">{heading} </Typography>
      <Box maxWidth="3xl" p={3}>
        <Typography variant="body1">
          This page outlines the technology stack, infrastructure, tooling and
          techniques used in implementing this website.
          <br />
        </Typography>
      </Box>
      <Grid container direction="column" spacing={4}>
        <Section title="Frontend Technologies" techs={frontendTechs} />
        <Section
          title="Infrastructure Technologies"
          techs={infrastructureTech}
        />
        <Section title="Tooling" techs={toolingTech} />
        <Section title="Methodologies" techs={methodologiesTech} />
      </Grid>
    </Grid>
  );
}

export function Section({
  title,
  techs,
}: {
  title: string;
  techs: (string | any)[][];
}) {
  const { mode } = useMyTheme();
  const theme = getMyTheme(mode); 
  const bg_color = theme.palette.primary.dark;
  const bg_fg_color = theme.palette.secondary.main;
  const urlEncodedColor = encodeURIComponent(bg_fg_color);
  const patternOpacity = 0.2;

  return (
    <Grid item>
      <Card
        // width="full"
        // padding={8}
        // boxShadow={"md"}
        // backgroundPosition={"-1.5em 2.5em"}
        // borderRadius={2}

        style={{
          backgroundColor: `${bg_color}`,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='199' viewBox='0 0 100 199'%3E%3Cg fill='${urlEncodedColor}' fill-opacity='${patternOpacity}'%3E%3Cpath d='M0 199V0h1v1.99L100 199h-1.12L1 4.22V199H0zM100 2h-.12l-1-2H100v2z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E")`,
        }}
      >
        <CardContent>
          <Typography variant="h4">{title}</Typography>
          <TechList techs={techs} />
        </CardContent>
      </Card>
    </Grid>
  );
}

export function TechList({ techs }: { techs: (string | any)[][] }) {
  const { mode } = useMyTheme();  
  const theme = getMyTheme(mode); 
  
  return (
    <List>
      {techs.map((tech, i) => (
        <ListItem key={i}>
          <ListItemIcon
            style={{ color: theme.palette.secondary.dark, fontSize: "2em" }}
          >
            {tech[2]}
          </ListItemIcon>
          <ListItemText>
            <strong>{tech[0]}</strong> - {tech[1]}
          </ListItemText>
        </ListItem>
      ))}
    </List>
  );
}
