# NextJS Introduction

## 공부한 내용 정리

### 1.2 Static Pre Rendering

nextjs 는 최종 html 이 pre-rendered 되어서, css 와 js 를 추가로 다운받기 전까지 브라우저에서 뭔가 보인다. <br>
일반적인 React 앱은 자바스크립트를 통해 html 을 렌더링을 해서, 관련 react 코드를 전부 받기 전까지 브라우저에 하얀 화면만 보인다. <br>
만약 브라우저에서 자바스크립트를 disable 하면 React 앱은 자바스크립트를 활성화 해주세요 말고는 아무것도 보이지 않지만, nextjs 는 뭐라도 보인다.

**Hydration** 이란, 받아온 html 에 자바스크립트가 붙어서, 단순히 document 가 보여지는 상태를 넘어서 사용자와 상호작용이 가능한 상태가 된것 을 말한다.

### 1.3 Routing

React 혹은 NextJS 프레임워크에서 제공하는 Router 를 활용해야하는 이유

전통적인 anchor 의 href 통해 페이지를 이동하면, 브라우저에서는 페이지 전체를 전부 리로드한다. <br>
그리고 이는 매우 SPA 스럽지 않은 페이지 이동이다. 리렌더링 되지 않도록 react-router-dom 혹은 next/link 를 활용하자

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
