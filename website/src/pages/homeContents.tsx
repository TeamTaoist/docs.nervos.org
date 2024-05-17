export interface CardLinks {
  label: string;
  link: string;
}
export interface TutorialProps {
  title: string;
  description: string;
  link: string;
  iframeSrc: string;
  illusSrc: string;
}
export interface DevToolProps {
  title: string;
  href: string;
  category: string;
}

export interface HomeCardProps {
  title: string;
  links?: CardLinks[];
  to?: string;
  icon: string;
}

const homeCardContents: HomeCardProps[] = [
  {
    title: "Getting Started",
    links: [
      { label: "How CKB Works", link: "/docs/getting-started/how-ckb-works" },
      {
        label: "Quick Start (5 min)",
        link: "/docs/getting-started/quick-start",
      },
      { label: "Dev Tools", link: "/docs/getting-started/devtool" },
    ],
    icon: "rocket",
  },
  {
    title: "DApp Tutorials",
    links: [
      { label: "Transfer CKB", link: "/docs/dapp/transfer-ckb" },
      { label: "Write an On-Chain Message", link: "/docs/dapp/write-message" },
      { label: "Create a DOB", link: "/docs/dapp/create-dob" },
    ],
    icon: "dapp",
  },
  {
    title: "Scripts (Smart Contracts)",
    links: [
      { label: "Intro to Script", link: "/docs/script/intro-to-script" },
      {
        label: "Tutorial: A Minimal Script",
        link: "/docs/script/minimal-script",
      },
      { label: "Tutorial: Run JS on CKB", link: "/docs/script/js-script" },
    ],
    icon: "script",
  },
  {
    title: "Run a Node",
    to: "/docs/node/run-mainnet-node",
    icon: "node",
  },
  {
    title: "Mining",
    to: "/docs/mining/algorithm-difficulty",
    icon: "mining",
  },
  {
    title: "Tech Explanation",
    to: "/docs/tech-explanation/nervos-blockchain",
    icon: "tech-explanation",
  },
];

const tutorialSectionContents: TutorialProps[] = [
  {
    title: "Transfer CKB",
    description: "View and transfer CKB from one address to another",
    link: "/docs/dapp/transfer-ckb",
    iframeSrc:
      "https://codesandbox.io/embed/58n9pq?view=preview&module=%2Flib.ts",
    illusSrc: "/svg/illus-transfer-ckb.svg",
  },
  {
    title: "Write an On-Chain Message",
    description: "Write ‘Hello CKB!’ to a CKB Cell and then retrieve it",
    link: "/docs/dapp/write-message",
    iframeSrc:
      "https://codesandbox.io/embed/jsn25g?view=Editor+%2B+Preview&module=%2Flib.ts",
    illusSrc: "/svg/illus-write-message.svg",
  },
  {
    title: "Create a Fungible Token",
    description: "Create, view, and transfer a custom token",
    link: "/docs/dapp/create-token",
    iframeSrc:
      "https://codesandbox.io/embed/drlfr5?view=Editor+%2B+Preview&module=%2Flib.ts",
    illusSrc: "/svg/illus-create-token.svg",
  },
  {
    title: "Create a DOB",
    description: "Create a digital object using Spore DOB",
    link: "/docs/dapp/create-dob",
    iframeSrc:
      "https://codesandbox.io/embed/rmwshy?view=Editor+%2B+Preview&module=%2Flib.ts",
    illusSrc: "/svg/illus-create-dob.svg",
  },
];

const devToolSectionContents: DevToolProps[] = [
  {
    title: "Lumos",
    href: "https://github.com/ckb-js/lumos",
    category: "Development & Deployment",
  },
  {
    title: "CKB SDKs",
    href: "https://github.com/nervosnetwork/ckb-sdk-rust",
    category: "Development & Deployment",
  },
  {
    title: "CKB-CLI",
    href: "https://github.com/nervosnetwork/ckb-cli",
    category: "Development & Deployment",
  },
  {
    title: "OffCKB",
    href: "https://github.com/RetricSu/offckb/tree/7d87d018be7626e1672a039b52f8bf4db9dd4eae",
    category: "Development & Deployment",
  },
  {
    title: "CKB Debugger",
    href: "https://github.com/nervosnetwork/ckb-standalone-debugger",
    category: "Utilities & Testing",
  },
  {
    title: "CKB Address",
    href: "https://ckb.tools/address",
    category: "Utilities & Testing",
  },
  {
    title: "Nervos Pudge Faucet",
    href: "https://faucet.nervos.org/",
    category: "Utilities & Testing",
  },
];

const contactUsContents: CardLinks[] = [
  { label: "github", link: "https://github.com/nervosnetwork" },
  { label: "discord", link: "https://discord.gg/nervosnetwork" },
  { label: "reddit", link: "https://www.reddit.com/r/NervosNetwork/" },
  { label: "nervostalk", link: "https://talk.nervos.org/" },
  { label: "telegram", link: "https://t.me/nervosnetwork" },
  { label: "twitter", link: "https://twitter.com/nervosnetwork" },
  { label: "medium", link: "https://medium.com/nervosnetwork" },
  {
    label: "youtube",
    link: "https://www.youtube.com/channel/UCONuJGdMzUY0Y6jrPBOzH7A",
  },
];

// Just to include a default export
const HomeContentsPage: React.FC = () => {
  return null;
};
export default HomeContentsPage;

export {
  homeCardContents,
  tutorialSectionContents,
  devToolSectionContents,
  contactUsContents,
};
