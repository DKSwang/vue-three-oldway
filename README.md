
<!DOCTYPE html>
<html lang="zh-CN" data-color-mode="light" data-light-theme="light" data-dark-theme="dark">
<head>
    <meta charset="utf-8">

    <link crossorigin="anonymous" media="all" rel="stylesheet"
          href="./css/frameworks-c1578db2179274a526c5adf51fabf053.css"/>

    <link crossorigin="anonymous" media="all" rel="stylesheet"
          href="./css/behaviors-27da2df54c24496c2dda0fead7741ff8.css"/>

    <link crossorigin="anonymous" media="all" rel="stylesheet"
          href="./css/github-b520f569f058537c08c17c980c693d5c.css"/>

    <script crossorigin="anonymous" defer="defer" type="application/javascript"
            src="./js/environment-f0adafbf.js"></script>
    <script crossorigin="anonymous" defer="defer" type="application/javascript"
            src="./js/chunk-frameworks-b6fcaece.js"></script>
    <script crossorigin="anonymous" defer="defer" type="application/javascript"
            src="./js/chunk-vendor-eb546311.js"></script>

    <script crossorigin="anonymous" defer="defer" type="application/javascript"
            src="./js/behaviors-dec6ac0d.js"></script>
    <script crossorigin="anonymous" defer="defer" type="application/javascript"
            src="./js/primer-21ba07f4.js"></script>

    <script crossorigin="anonymous" defer="defer" type="application/javascript" data-module-id="./chunk-color-modes.js"
            data-src="./js/chunk-color-modes-322b85a1.js"></script>
    <script crossorigin="anonymous" defer="defer" type="application/javascript"
            data-module-id="./chunk-contributions-spider-graph.js"
            data-src="./js/chunk-contributions-spider-graph-7af7f2e9.js"></script>
    <script crossorigin="anonymous" defer="defer" type="application/javascript" data-module-id="./chunk-drag-drop.js"
            data-src="./js/chunk-drag-drop-a1b311f2.js"></script>
    <script crossorigin="anonymous" defer="defer" type="application/javascript" data-module-id="./chunk-edit.js"
            data-src="./js/chunk-edit-7159c8a1.js"></script>
    <script crossorigin="anonymous" defer="defer" type="application/javascript"
            data-module-id="./chunk-emoji-picker-element.js"
            data-src="./js/chunk-emoji-picker-element-4c69db4f.js"></script>
    <script crossorigin="anonymous" defer="defer" type="application/javascript"
            data-module-id="./chunk-insights-graph.js"
            data-src="./js/chunk-insights-graph-370624c3.js"></script>
    <script crossorigin="anonymous" defer="defer" type="application/javascript" data-module-id="./chunk-jump-to.js"
            data-src="./js/chunk-jump-to-f59f9e6c.js"></script>
    <script crossorigin="anonymous" defer="defer" type="application/javascript"
            data-module-id="./chunk-profile-pins-element.js"
            data-src="./js/chunk-profile-pins-element-4bc694a3.js"></script>
    <script crossorigin="anonymous" defer="defer" type="application/javascript"
            data-module-id="./chunk-runner-groups.js"
            data-src="./js/chunk-runner-groups-13e1fec0.js"></script>
    <script crossorigin="anonymous" defer="defer" type="application/javascript"
            data-module-id="./chunk-sortable-behavior.js"
            data-src="./js/chunk-sortable-behavior-2b2992b3.js"></script>
    <script crossorigin="anonymous" defer="defer" type="application/javascript" data-module-id="./chunk-toast.js"
            data-src="./js/chunk-toast-700b103a.js"></script>
    <script crossorigin="anonymous" defer="defer" type="application/javascript" data-module-id="./chunk-tweetsodium.js"
            data-src="./js/chunk-tweetsodium-46bd83a0.js"></script>
    <script crossorigin="anonymous" defer="defer" type="application/javascript"
            data-module-id="./chunk-user-status-submit.js"
            data-src="./js/chunk-user-status-submit-eee4da2a.js"></script>
    <script crossorigin="anonymous" defer="defer" type="application/javascript"
            src="./js/profile-673ce5b6.js"></script>
    <meta name="viewport" content="width=device-width">
    <title>神奇的程序员</title>
    <meta name="description"
          content="神奇的程序员，一位前端开发工程师 😋😋 WeChat: Baymax-kt. likaia has 48 repositories available. Follow their code on GitHub.">
    <link rel="search" type="application/opensearchdescription+xml" href="./xml/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://www.kaisir.cn/chat-system/favicon.ico" title="kaisir.cn">
    <meta property="fb:app_id" content="1401488693436528">
    <meta name="apple-itunes-app" content="app-id=1477376905"/>
    <meta property="og:image" content="https://www.kaisir.cn/uploads/0ed7f9d0c11c4cc191c042fd6ceb4867.jpeg"/>
    <meta property="og:site_name" content="神奇的程序员"/>
    <meta property="og:type" content="profile"/>
    <meta property="og:title" content="神奇的程序员"/>
    <meta property="og:url" content="https://www.kaisir.cn/"/>
    <meta property="og:description" content="神奇的程序员，一位前端开发工程师 😋😋
WeChat: Baymax-kt. likaia has 48 repositories available. Follow their code on GitHub."/>
    <meta property="profile:username" content="神奇的程序员"/>
    <meta name="hostname" content="kaisir.cn">
    <meta name="user-login" content="神奇的程序员">
    <meta name="expected-hostname" content="kaisir.cn">
    <link rel="mask-icon" href="https://www.kaisir.cn/chat-system/favicon.ico">
    <link rel="alternate icon" class="js-site-favicon" type="image/png"
          href="https://www.kaisir.cn/chat-system/favicon.ico">
    <link rel="icon" class="js-site-favicon" type="image/svg+xml"
          href="https://www.kaisir.cn/chat-system/favicon.ico">
    <meta name="theme-color" content="#1e2327">
    <meta name="color-scheme" content="dark light"/>
    <link rel="manifest" href="./json/manifest.json" crossOrigin="use-credentials">
</head>

<body class="logged-in env-production page-responsive page-profile mine" style="word-wrap: break-word;">

<script type="text/javascript">
    // 切换主题
    const switchTheme = (isDark) => {
        if (isDark) {
            document.getElementsByTagName("html")[0].setAttribute("data-color-mode","dark");
            window.onload = function () {
                // 修改项目展示卡片主题
                document.getElementById("projectCard").setAttribute("src","https://www.kaisir.cn/uploads/home-page/img/dark-chat-system.svg")
            }
            return;
        }
        document.getElementsByTagName("html")[0].setAttribute("data-color-mode","light");
        window.onload = function () {
            // 修改项目展示卡片主题
            document.getElementById("projectCard").setAttribute("src","https://www.kaisir.cn/uploads/home-page/img/light-chat-system.svg")
        }
    }
    if (window.matchMedia) {
        const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        // 切换主题
        switchTheme(isDark);
    }
</script>

<div id="start-of-content" class="show-on-focus"></div>

<div
        class="application-main "
        data-commit-hovercards-enabled
        data-discussion-hovercards-enabled
        data-issue-and-pr-hovercards-enabled
>
    <main id="js-pjax-container" data-pjax-container>
        <div class="mt-4 position-sticky top-0 d-none d-md-block color-bg-primary width-full border-bottom color-border-secondary"
             style="z-index:3;">
            <div class="container-xl px-3 px-md-4 px-lg-5">
                <div class="gutter-condensed gutter-lg flex-column flex-md-row d-flex">
                    <div class="flex-shrink-0 col-12 col-md-3 mb-4 mb-md-0">
                        <div class="user-profile-sticky-bar">
                            <div class="user-profile-mini-vcard d-table">
              <span class="user-profile-mini-avatar d-table-cell v-align-middle lh-condensed-ultra pr-2">
                <img class="rounded-1 avatar-user" height="32" width="32" alt="@likaia"
                     src="https://avatars.githubusercontent.com/u/35120858?s=88&amp;u=c3f3a4426a21d5d20aa7090c9b91172d022d476a&amp;v=4"/>
              </span>
                                <span class="d-table-cell v-align-middle lh-condensed">
                <strong>likaia</strong>


              </span>
                            </div>
                        </div>
                    </div>

                    <div class="flex-shrink-0 col-12 col-md-9 mb-4 mb-md-0">
                        <div class="UnderlineNav width-full box-shadow-none hx_UnderlineNav-with-profile-color-modes-banner">
                            <nav class="UnderlineNav-body" data-pjax aria-label="User profile">
                                <a aria-current="page" class="UnderlineNav-item selected"
                                   data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:35120858,&quot;target&quot;:&quot;TAB_OVERVIEW&quot;,&quot;user_id&quot;:35120858,&quot;originating_url&quot;:&quot;https://github.com/likaia&quot;}}"
                                   data-hydro-click-hmac="06a1b6a865fbe81787e023ab51992e4c0b935cdcbf5970bb0bad8c5a9b21367c"
                                   href="javascript:;">
                                    <svg class="octicon octicon-book UnderlineNav-octicon hide-sm" height="16"
                                         viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true">
                                        <path fill-rule="evenodd"
                                              d="M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75V1.75zm8.755 3a2.25 2.25 0 012.25-2.25H14.5v9h-3.757c-.71 0-1.4.201-1.992.572l.004-7.322zm-1.504 7.324l.004-5.073-.002-2.253A2.25 2.25 0 005.003 2.5H1.5v9h3.757a3.75 3.75 0 011.994.574z"></path>
                                    </svg>
                                    Overview
                                </a>
                                <a class="UnderlineNav-item"
                                   data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:35120858,&quot;target&quot;:&quot;TAB_REPOSITORIES&quot;,&quot;user_id&quot;:35120858,&quot;originating_url&quot;:&quot;https://github.com/likaia&quot;}}"
                                   data-hydro-click-hmac="67d059d1f50e7ba8b727a27527ce5cf008398a20a2c3a1bf6e9b350bf1f5b786"
                                   href="https://github.com/likaia?tab=repositories">
                                    <svg class="octicon octicon-repo UnderlineNav-octicon hide-sm" height="16"
                                         viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true">
                                        <path fill-rule="evenodd"
                                              d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
                                    </svg>
                                    Repositories
                                    <span title="48" class="Counter ">48</span>
                                </a>
                            </nav>
                            <div class="profile-color-modes js-promo-color-modes-banner-profile isInitialToggle">
                                <!-- '"` --><!-- </textarea></xmp> --></option></form>
                                <form class="js-promo-color-modes-form" action="/settings/color_mode.likaia"
                                      accept-charset="UTF-8" method="post"><input type="hidden" name="_method"
                                                                                  value="put"/><input type="hidden"
                                                                                                      name="authenticity_token"
                                                                                                      value="TfvYJ236FV6fyZMk4dyTXIiAZR5gaTabvFTQAn9o5fb81w9601uvoL9woCGh4C6SD9KFfqZDcYvMZ+SAxLopZA=="/>
                                    <input type="hidden" name="user_theme" value="light">
                                    <input type="hidden" name="source" value="profile">
                                </form>
                                <svg aria-hidden="true" width="106" height="60" viewBox="0 0 106 60" fill="none"
                                     stroke-width="3" stroke-linecap="round" stroke-linejoin="round"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g class="profile-color-modes-illu-group profile-color-modes-illu-red">
                                        <path d="M37.5 58.5V57.5C37.5 49.768 43.768 43.5 51.5 43.5V43.5C59.232 43.5 65.5 49.768 65.5 57.5V58.5"></path>
                                    </g>
                                    <g class="profile-color-modes-illu-group profile-color-modes-illu-orange">
                                        <path d="M104.07 58.5C103.401 55.092 97.7635 54.3869 95.5375 57.489C97.4039 54.6411 99.7685 48.8845 94.6889 46.6592C89.4817 44.378 86.1428 50.1604 85.3786 54.1158C85.9519 50.4768 83.7226 43.294 78.219 44.6737C72.7154 46.0534 72.7793 51.3754 74.4992 55.489C74.169 54.7601 72.4917 53.3567 70.5 52.8196"></path>
                                    </g>
                                    <g class="profile-color-modes-illu-group profile-color-modes-illu-purple">
                                        <path d="M5.51109 58.5V52.5C5.51109 41.4543 14.4654 32.5 25.5111 32.5C31.4845 32.5 36.8464 35.1188 40.5111 39.2709C40.7212 39.5089 40.9258 39.7521 41.1245 40"></path>
                                        <path d="M27.511 49.5C29.6777 49.5 28.911 49.5 32.511 49.5"></path>
                                        <path d="M27.511 56.5C29.6776 56.5 26.911 56.5 30.511 56.5"></path>
                                    </g>
                                    <g class="profile-color-modes-illu-group profile-color-modes-illu-green">
                                        <circle cx="5.5" cy="12.5" r="4"></circle>
                                        <circle cx="18.5" cy="5.5" r="4"></circle>
                                        <path d="M18.5 9.5L18.5 27.5"></path>
                                        <path d="M18.5 23.5C6 23.5 5.5 23.6064 5.5 16.5"></path>
                                    </g>
                                    <g class="profile-color-modes-illu-group profile-color-modes-illu-blue">
                                        <g class="profile-color-modes-illu-frame">
                                            <path d="M40.6983 31.5C40.5387 29.6246 40.6456 28.0199 41.1762 27.2317C42.9939 24.5312 49.7417 26.6027 52.5428 30.2409C54.2551 29.8552 56.0796 29.6619 57.9731 29.6619C59.8169 29.6619 61.5953 29.8452 63.2682 30.211C66.0833 26.5913 72.799 24.5386 74.6117 27.2317C75.6839 28.8246 75.0259 33.7525 73.9345 37.5094C74.2013 37.9848 74.4422 38.4817 74.6555 39"></path>
                                        </g>
                                        <g class="profile-color-modes-illu-frame">
                                            <path d="M41.508 31.5C41.6336 31.2259 41.7672 30.9582 41.9085 30.6968C40.7845 26.9182 40.086 21.8512 41.1762 20.2317C42.9939 17.5312 49.7417 19.6027 52.5428 23.2409C54.2551 22.8552 56.0796 22.6619 57.9731 22.6619C59.8169 22.6619 61.5953 22.8452 63.2682 23.211C66.0833 19.5913 72.799 17.5386 74.6117 20.2317C75.6839 21.8246 75.0259 26.7525 73.9345 30.5094C75.1352 32.6488 75.811 35.2229 75.811 38.2283C75.811 38.49 75.8058 38.7472 75.7957 39"></path>
                                            <path d="M49.4996 33V35.6757"></path>
                                            <path d="M67.3375 33V35.6757"></path>
                                        </g>
                                        <g class="profile-color-modes-illu-frame">
                                            <path d="M41.508 31.5C41.6336 31.2259 41.7672 30.9582 41.9085 30.6968C40.7845 26.9182 40.086 21.8512 41.1762 20.2317C42.9939 17.5312 49.7417 19.6027 52.5428 23.2409C54.2551 22.8552 56.0796 22.6619 57.9731 22.6619C59.8169 22.6619 61.5953 22.8452 63.2682 23.211C66.0833 19.5913 72.799 17.5386 74.6117 20.2317C75.6839 21.8246 75.0259 26.7525 73.9345 30.5094C75.1352 32.6488 75.811 35.2229 75.811 38.2283C75.811 38.49 75.8058 38.7472 75.7957 39"></path>
                                        </g>
                                        <g class="profile-color-modes-illu-frame">
                                            <path d="M41.508 31.5C41.6336 31.2259 41.7672 30.9582 41.9085 30.6968C40.7845 26.9182 40.086 21.8512 41.1762 20.2317C42.9939 17.5312 49.7417 19.6027 52.5428 23.2409C54.2551 22.8552 56.0796 22.6619 57.9731 22.6619C59.8169 22.6619 61.5953 22.8452 63.2682 23.211C66.0833 19.5913 72.799 17.5386 74.6117 20.2317C75.6839 21.8246 75.0259 26.7525 73.9345 30.5094C75.1352 32.6488 75.811 35.2229 75.811 38.2283C75.811 38.49 75.8058 38.7472 75.7957 39"></path>
                                            <path d="M49.4996 33V35.6757"></path>
                                            <path d="M67.3375 33V35.6757"></path>
                                        </g>
                                        <g class="profile-color-modes-illu-frame">
                                            <path d="M41.508 31.5C41.6336 31.2259 41.7672 30.9582 41.9085 30.6968C40.7845 26.9182 40.086 21.8512 41.1762 20.2317C42.9939 17.5312 49.7417 19.6027 52.5428 23.2409C54.2551 22.8552 56.0796 22.6619 57.9731 22.6619C59.8169 22.6619 61.5953 22.8452 63.2682 23.211C66.0833 19.5913 72.799 17.5386 74.6117 20.2317C75.6839 21.8246 75.0259 26.7525 73.9345 30.5094C75.1352 32.6488 75.811 35.2229 75.811 38.2283C75.811 38.49 75.8058 38.7472 75.7957 39"></path>
                                        </g>
                                        <g class="profile-color-modes-illu-frame">
                                            <path d="M41.508 31.5C41.6336 31.2259 41.7672 30.9582 41.9085 30.6968C40.7845 26.9182 40.086 21.8512 41.1762 20.2317C42.9939 17.5312 49.7417 19.6027 52.5428 23.2409C54.2551 22.8552 56.0796 22.6619 57.9731 22.6619C59.8169 22.6619 61.5953 22.8452 63.2682 23.211C66.0833 19.5913 72.799 17.5386 74.6117 20.2317C75.6839 21.8246 75.0259 26.7525 73.9345 30.5094C75.1352 32.6488 75.811 35.2229 75.811 38.2283C75.811 38.49 75.8058 38.7472 75.7957 39"></path>
                                            <path d="M49.4996 33V35.6757"></path>
                                            <path d="M67.3375 33V35.6757"></path>
                                        </g>
                                        <g class="profile-color-modes-illu-frame">
                                            <path d="M73.4999 40.2236C74.9709 38.2049 75.8108 35.5791 75.8108 32.2283C75.8108 29.2229 75.1351 26.6488 73.9344 24.5094C75.0258 20.7525 75.6838 15.8246 74.6116 14.2317C72.7989 11.5386 66.0832 13.5913 63.2681 17.211C61.5952 16.8452 59.8167 16.6619 57.973 16.6619C56.0795 16.6619 54.2549 16.8552 52.5427 17.2409C49.7416 13.6027 42.9938 11.5312 41.176 14.2317C40.0859 15.8512 40.7843 20.9182 41.9084 24.6968C41.003 26.3716 40.4146 28.3065 40.2129 30.5"></path>
                                            <path d="M82.9458 30.5471L76.8413 31.657"></path>
                                            <path d="M76.2867 34.4319L81.8362 37.7616"></path>
                                            <path d="M49.4995 27.8242V30.4999"></path>
                                            <path d="M67.3374 27.8242V30.4998"></path>
                                        </g>
                                        <g class="profile-color-modes-illu-frame">
                                            <path d="M45.3697 34.2658C41.8877 32.1376 39.7113 28.6222 39.7113 23.2283C39.7113 20.3101 40.3483 17.7986 41.4845 15.6968C40.3605 11.9182 39.662 6.85125 40.7522 5.23168C42.5699 2.53117 49.3177 4.6027 52.1188 8.24095C53.831 7.85521 55.6556 7.66186 57.5491 7.66186C59.3929 7.66186 61.1713 7.84519 62.8442 8.21095C65.6593 4.59134 72.375 2.5386 74.1877 5.23168C75.2599 6.82461 74.6019 11.7525 73.5105 15.5094C74.7112 17.6488 75.3869 20.2229 75.3869 23.2283C75.3869 28.6222 73.2105 32.1376 69.7285 34.2658C70.8603 35.5363 72.6057 38.3556 73.3076 40"></path>
                                            <path d="M49.0747 19.8242V22.4999"></path>
                                            <path d="M54.0991 28C54.6651 29.0893 55.7863 30.0812 57.9929 30.0812C59.0642 30.0812 59.8797 29.8461 60.5 29.4788"></path>
                                            <path d="M66.9126 19.8242V22.4999"></path>
                                            <path d="M33.2533 20.0237L39.0723 22.1767"></path>
                                            <path d="M39.1369 25.0058L33.0935 27.3212"></path>
                                            <path d="M81.8442 19.022L76.0252 21.1751"></path>
                                            <path d="M75.961 24.0041L82.0045 26.3196"></path>
                                        </g>
                                        <g class="profile-color-modes-illu-frame">
                                            <path d="M73.4999 40.2236C74.9709 38.2049 75.8108 35.5791 75.8108 32.2283C75.8108 29.2229 75.1351 26.6488 73.9344 24.5094C75.0258 20.7525 75.6838 15.8246 74.6116 14.2317C72.7989 11.5386 66.0832 13.5913 63.2681 17.211C61.5952 16.8452 59.8167 16.6619 57.973 16.6619C56.0795 16.6619 54.2549 16.8552 52.5427 17.2409C49.7416 13.6027 42.9938 11.5312 41.176 14.2317C40.0859 15.8512 40.7843 20.9182 41.9084 24.6968C41.003 26.3716 40.4146 28.3065 40.2129 30.5"></path>
                                            <path d="M82.9458 30.5471L76.8413 31.657"></path>
                                            <path d="M76.2867 34.4319L81.8362 37.7616"></path>
                                            <path d="M49.4995 27.8242V30.4999"></path>
                                            <path d="M67.3374 27.8242V30.4998"></path>
                                        </g>
                                        <g class="profile-color-modes-illu-frame">
                                            <path d="M40.6983 31.5C40.5387 29.6246 40.6456 28.0199 41.1762 27.2317C42.9939 24.5312 49.7417 26.6027 52.5428 30.2409C54.2551 29.8552 56.0796 29.6619 57.9731 29.6619C59.8169 29.6619 61.5953 29.8452 63.2682 30.211C66.0833 26.5913 72.799 24.5386 74.6117 27.2317C75.6839 28.8246 75.0259 33.7525 73.9345 37.5094C74.2013 37.9848 74.4422 38.4817 74.6555 39"></path>
                                        </g>
                                    </g>
                                </svg>
                                <span
                                        class="profile-color-modes-toggle js-promo-color-modes-toggle"
                                        role="checkbox"
                                        aria-checked="true"
                                        aria-label="Toggle dark mode"
                                        tabindex="0"
                                >
    <div class="profile-color-modes-toggle-track"></div>
    <div class="profile-color-modes-toggle-thumb">
      <svg style="fill: var(--color-profile-color-modes-toggle-moon); margin: 7px 0 0 7px;" aria-hidden="true"
           width="14" height="13" viewBox="0 0 14 13" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M4.52208 7.71754C7.5782 7.71754 10.0557 5.24006 10.0557 2.18394C10.0557 1.93498 10.0392 1.68986 10.0074 1.44961C9.95801 1.07727 10.3495 0.771159 10.6474 0.99992C12.1153 2.12716 13.0615 3.89999 13.0615 5.89383C13.0615 9.29958 10.3006 12.0605 6.89485 12.0605C3.95334 12.0605 1.49286 10.001 0.876728 7.24527C0.794841 6.87902 1.23668 6.65289 1.55321 6.85451C2.41106 7.40095 3.4296 7.71754 4.52208 7.71754Z"></path>
      </svg>
    </div>
  </span>

                            </div>


                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="container-xl px-3 px-md-4 px-lg-5">
            <div class="gutter-condensed gutter-lg flex-column flex-md-row d-flex">
                <div class="flex-shrink-0 col-12 col-md-3 mb-4 mb-md-0">
                    <div class="h-card mt-md-n5" data-acv-badge-hovercards-enabled itemscope
                         itemtype="http://schema.org/Person">

                        <div class="user-profile-sticky-bar js-user-profile-sticky-bar d-none d-md-block">
                            <div class="user-profile-mini-vcard d-table">
            <span class="user-profile-mini-avatar d-table-cell v-align-middle lh-condensed-ultra pr-2">
              <img class="rounded-1 avatar-user" height="32" width="32" alt="@likaia"
                   src="https://avatars.githubusercontent.com/u/35120858?s=88&amp;u=c3f3a4426a21d5d20aa7090c9b91172d022d476a&amp;v=4"/>
            </span>
                                <span class="d-table-cell v-align-middle lh-condensed">
              <strong>likaia</strong>


            </span>
                            </div>
                        </div>


                        <div class="clearfix d-flex d-md-block flex-items-center mb-4 mb-md-0">
                            <div class="position-relative d-inline-block col-2 col-md-12 mr-3 mr-md-0 flex-shrink-0"
                                 style="z-index:4;">
                                <a class="tooltipped tooltipped-s d-block" aria-label="Change your avatar"
                                   data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:35120858,&quot;target&quot;:&quot;EDIT_AVATAR&quot;,&quot;user_id&quot;:35120858,&quot;originating_url&quot;:&quot;https://github.com/likaia&quot;}}"
                                   data-hydro-click-hmac="04b9667cf6988eedc85e6a4c51c2e02451a03a1a62bde7ad3568189718efb337"
                                   href="https://github.com/account"><img style="height:auto;" alt="" width="260"
                                                                          height="260"
                                                                          class="avatar avatar-user width-full border color-bg-primary"
                                                                          src="https://avatars.githubusercontent.com/u/35120858?s=460&amp;u=c3f3a4426a21d5d20aa7090c9b91172d022d476a&amp;v=4"/></a>

                                <div class="user-status-container position-relative hide-sm hide-md">
                                    <div class="d-flex user-status-circle-badge-container">


                                        <div class="d-flex flex-items-center p-2 width-full color-bg-warning border color-border-warning border-0 rounded-bottom-0 user-status-circle-badge lh-condensed-ultra" data-team-hovercards-enabled="">
                                            <div class="mr-1 ml-1 f5">
                                                <div><g-emoji class="g-emoji" alias="v" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/270c.png">✌️</g-emoji></div>
                                            </div>
                                            <div class="user-status-message-wrapper f6 color-text-primary ws-normal">
                                                <div>求职中</div>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div class="vcard-names-container float-left col-10 col-md-12 pt-1 pt-md-3 pb-1 pb-md-3">
                                <h1 class="vcard-names pl-2 pl-md-0">
                                    <span class="p-name vcard-fullname d-block overflow-hidden"
                                          itemprop="name">likai</span>
                                    <span class="p-nickname vcard-username d-block"
                                          itemprop="additionalName">likaia</span>
                                </h1>
                            </div>
                        </div>

                        <div class="mt-2 user-status-container d-md-none">


                            <div class="d-flex flex-items-center p-2 width-full color-bg-warning border color-border-warning border-0 rounded-bottom-0" data-team-hovercards-enabled="">
                                <div class="mr-1 ml-1 f5">
                                    <div><g-emoji class="g-emoji" alias="v" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/270c.png">✌️</g-emoji></div>
                                </div>
                                <div class="user-status-message-wrapper f6 color-text-primary ws-normal lh-condensed">
                                    <div>求职中</div>

                                </div>
                            </div>

                        </div>


                        <div class="d-flex flex-column">
                            <div class="flex-order-1 flex-md-order-none">

                                <div class="d-flex">
                                </div>


                                <!-- '"` --><!-- </textarea></xmp> --></option></form>
                                <form hidden="hidden" class="position-relative flex-auto js-profile-editable-form"
                                      action="/users/likaia" accept-charset="UTF-8" method="post"><input type="hidden"
                                                                                                         name="_method"
                                                                                                         value="put"/><input
                                        type="hidden" name="authenticity_token"
                                        value="RJFHA7p9CgqzzO31cMpZtqrVG7RzCrHmzNAOqj3xHLGkUEKX8QbhIW7a8o8lFf/jQTltgcq9QRusEy6IX9Atbg=="/>

                                    <div class="js-length-limited-input-container">
    <textarea
            class="form-control js-length-limited-input mb-1 width-full js-user-profile-bio-edit"
            name="user[profile_bio]"
            placeholder="Add a bio"
            aria-label="Add a bio"
            rows="3"
            data-input-max-length="160"
            data-warning-text="{{remaining}} remaining">神奇的程序员，一位前端开发工程师。
WeChat: Baymax-kt</textarea>
                                        <div class="d-none js-length-limited-input-warning user-profile-bio-message text-right m-0"></div>
                                    </div>

                                    <div class="color-text-tertiary mt-2 d-flex flex-items-center">
                                        <svg style="width: 16px;" class="octicon octicon-organization"
                                             viewBox="0 0 16 16" version="1.1" width="16" height="16"
                                             aria-hidden="true">
                                            <path fill-rule="evenodd"
                                                  d="M1.5 14.25c0 .138.112.25.25.25H4v-1.25a.75.75 0 01.75-.75h2.5a.75.75 0 01.75.75v1.25h2.25a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25h-8.5a.25.25 0 00-.25.25v12.5zM1.75 16A1.75 1.75 0 010 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 00.25-.25V8.285a.25.25 0 00-.111-.208l-1.055-.703a.75.75 0 11.832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0114.25 16h-3.5a.75.75 0 01-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 01-.75-.75V14h-1v1.25a.75.75 0 01-.75.75h-3zM3 3.75A.75.75 0 013.75 3h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 3.75zM3.75 6a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM3 9.75A.75.75 0 013.75 9h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 9.75zM7.75 9a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM7 6.75A.75.75 0 017.75 6h.5a.75.75 0 010 1.5h-.5A.75.75 0 017 6.75zM7.75 3a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5z"></path>
                                        </svg>
                                        <input class="ml-2 form-control flex-auto input-sm" placeholder="Company"
                                               aria-label="Company" name="user[profile_company]" value="在职-考虑机会">
                                    </div>

                                    <div class="color-text-tertiary mt-2 d-flex flex-items-center">
                                        <svg style="width: 16px;" class="octicon octicon-location" viewBox="0 0 16 16"
                                             version="1.1" width="16" height="16" aria-hidden="true">
                                            <path fill-rule="evenodd"
                                                  d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"></path>
                                        </svg>
                                        <input class="ml-2 form-control flex-auto input-sm" placeholder="Location"
                                               aria-label="Location" name="user[profile_location]" value="Guang Zhou">
                                    </div>

                                    <div class="color-text-tertiary mt-2 d-flex flex-items-center">
                                        <svg style="width: 16px;" class="octicon octicon-mail" viewBox="0 0 16 16"
                                             version="1.1" width="16" height="16" aria-hidden="true">
                                            <path fill-rule="evenodd"
                                                  d="M1.75 2A1.75 1.75 0 000 3.75v.736a.75.75 0 000 .027v7.737C0 13.216.784 14 1.75 14h12.5A1.75 1.75 0 0016 12.25v-8.5A1.75 1.75 0 0014.25 2H1.75zM14.5 4.07v-.32a.25.25 0 00-.25-.25H1.75a.25.25 0 00-.25.25v.32L8 7.88l6.5-3.81zm-13 1.74v6.441c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V5.809L8.38 9.397a.75.75 0 01-.76 0L1.5 5.809z"></path>
                                        </svg>
                                        <select name="user[profile_email]" id="user_profile_email"
                                                class="form-select form-control ml-2 flex-auto select-sm">
                                            <option value=""></option>
                                            <option selected="selected" value="magicalprogrammer@qq.com">
                                                magicalprogrammer@qq.com
                                            </option>
                                        </select>
                                    </div>

                                    <div class="color-text-tertiary mt-2 d-flex flex-items-center">
                                        <svg style="width: 16px;" class="octicon octicon-link" viewBox="0 0 16 16"
                                             version="1.1" width="16" height="16" aria-hidden="true">
                                            <path fill-rule="evenodd"
                                                  d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path>
                                        </svg>
                                        <input class="ml-2 form-control flex-auto input-sm" placeholder="Website"
                                               aria-label="Website" name="user[profile_blog]"
                                               value="https://juejin.im/user/5cbbe37c51882532c334c324/posts">
                                    </div>

                                    <div class="color-text-tertiary mt-2 d-flex flex-items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 273.5 222.3" height="16"
                                             width="16">
                                            <path d="M273.5 26.3a109.77 109.77 0 0 1-32.2 8.8 56.07 56.07 0 0 0 24.7-31 113.39 113.39 0 0 1-35.7 13.6 56.1 56.1 0 0 0-97 38.4 54 54 0 0 0 1.5 12.8A159.68 159.68 0 0 1 19.1 10.3a56.12 56.12 0 0 0 17.4 74.9 56.06 56.06 0 0 1-25.4-7v.7a56.11 56.11 0 0 0 45 55 55.65 55.65 0 0 1-14.8 2 62.39 62.39 0 0 1-10.6-1 56.24 56.24 0 0 0 52.4 39 112.87 112.87 0 0 1-69.7 24 119 119 0 0 1-13.4-.8 158.83 158.83 0 0 0 86 25.2c103.2 0 159.6-85.5 159.6-159.6 0-2.4-.1-4.9-.2-7.3a114.25 114.25 0 0 0 28.1-29.1"
                                                  fill="currentColor"></path>
                                        </svg>

                                        <input
                                                class="ml-2 form-control flex-auto input-sm"
                                                placeholder="Twitter username"
                                                aria-label="Twitter username"
                                                name="user[profile_twitter_username]"
                                                value=""
                                        >
                                    </div>

                                    <div class="my-3">
                                        <div class="js-profile-editable-error color-text-danger my-3"></div>
                                        <button type="submit" class="btn btn-sm btn-primary">Save</button>
                                        <button type="reset" class="btn btn-sm js-profile-editable-cancel">Cancel
                                        </button>
                                    </div>

                                </form>
                            </div>


                            <div class="js-profile-editable-area d-flex flex-column d-md-block">
                                <div class="p-note user-profile-bio mb-3 js-user-profile-bio f4"
                                >
                                    <div>神奇的程序员，一位前端开发工程师.
                                        <br/>
                                        WeChat: Baymax-kt
                                    </div>
                                </div>

                                <div class="flex-order-1 flex-md-order-none mt-2 mt-md-0">
                                    <div class="mb-3">
                                        <a class="Link--secondary no-underline no-wrap" href="https://juejin.cn/user/3984285870859614/followers">
                                            <svg class="octicon octicon-people text-gray-light" height="16"
                                                 viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true">
                                                <path fill-rule="evenodd"
                                                      d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z"></path>
                                            </svg>
                                            <span class="text-bold color-text-primary">1780+</span>
                                            粉丝
                                        </a> &middot; <a class="Link--secondary no-underline no-wrap"
                                                         href="https://juejin.cn/user/3984285870859614/following">
                                        <span class="text-bold color-text-primary">36</span>
                                        关注
                                    </a> &middot; <a class="Link--secondary no-underline no-wrap"
                                                     href="https://github.com/likaia?tab=stars">
                                        <svg class="octicon octicon-star text-gray-light" height="16"
                                             viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true">
                                            <path fill-rule="evenodd"
                                                  d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
                                        </svg>
                                        <span class="text-bold color-text-primary">45</span>
                                    </a></div>
                                </div>

                                <ul class="vcard-details">
                                    <li class="vcard-detail pt-1 css-truncate css-truncate-target hide-sm hide-md"
                                        itemprop="worksFor" show_title="false" aria-label="Organization: 在职-考虑机会">
                                        <svg class="octicon octicon-organization" viewBox="0 0 16 16" version="1.1"
                                             width="16" height="16" aria-hidden="true">
                                            <path fill-rule="evenodd"
                                                  d="M1.5 14.25c0 .138.112.25.25.25H4v-1.25a.75.75 0 01.75-.75h2.5a.75.75 0 01.75.75v1.25h2.25a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25h-8.5a.25.25 0 00-.25.25v12.5zM1.75 16A1.75 1.75 0 010 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 00.25-.25V8.285a.25.25 0 00-.111-.208l-1.055-.703a.75.75 0 11.832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0114.25 16h-3.5a.75.75 0 01-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 01-.75-.75V14h-1v1.25a.75.75 0 01-.75.75h-3zM3 3.75A.75.75 0 013.75 3h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 3.75zM3.75 6a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM3 9.75A.75.75 0 013.75 9h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 9.75zM7.75 9a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM7 6.75A.75.75 0 017.75 6h.5a.75.75 0 010 1.5h-.5A.75.75 0 017 6.75zM7.75 3a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5z"></path>
                                        </svg>
                                        <span class="p-org"><div>在职-考虑机会</div></span>
                                    </li>
                                    <li class="vcard-detail pt-1 css-truncate css-truncate-target hide-sm hide-md"
                                        itemprop="homeLocation" show_title="false"
                                        aria-label="Home location: Guang Zhou">
                                        <svg class="octicon octicon-location" viewBox="0 0 16 16" version="1.1"
                                             width="16" height="16" aria-hidden="true">
                                            <path fill-rule="evenodd"
                                                  d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"></path>
                                        </svg>
                                        <span class="p-label">广州</span>
                                    </li>
                                    <li itemprop="email" aria-label="Email: magicalprogrammer@qq.com"
                                        class="vcard-detail pt-1 css-truncate css-truncate-target ">
                                        <svg class="octicon octicon-mail" viewBox="0 0 16 16" version="1.1" width="16"
                                             height="16" aria-hidden="true">
                                            <path fill-rule="evenodd"
                                                  d="M1.75 2A1.75 1.75 0 000 3.75v.736a.75.75 0 000 .027v7.737C0 13.216.784 14 1.75 14h12.5A1.75 1.75 0 0016 12.25v-8.5A1.75 1.75 0 0014.25 2H1.75zM14.5 4.07v-.32a.25.25 0 00-.25-.25H1.75a.25.25 0 00-.25.25v.32L8 7.88l6.5-3.81zm-13 1.74v6.441c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V5.809L8.38 9.397a.75.75 0 01-.76 0L1.5 5.809z"></path>
                                        </svg>
                                        <a class="u-email Link--primary "
                                           href="mailto:&#x6d;&#x61;&#x67;&#x69;&#x63;&#x61;&#x6c;&#x70;&#x72;&#x6f;&#x67;&#x72;&#x61;&#x6d;&#x6d;&#x65;&#x72;&#x40;&#x71;&#x71;&#x2e;&#x63;&#x6f;&#x6d;">&#x6d;&#x61;&#x67;&#x69;&#x63;&#x61;&#x6c;&#x70;&#x72;&#x6f;&#x67;&#x72;&#x61;&#x6d;&#x6d;&#x65;&#x72;&#x40;&#x71;&#x71;&#x2e;&#x63;&#x6f;&#x6d;</a>
                                    </li>
                                    <li itemprop="url" data-test-selector="profile-website-url"
                                        class="vcard-detail pt-1 css-truncate css-truncate-target ">
                                        <svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16"
                                             height="16" aria-hidden="true">
                                            <path fill-rule="evenodd"
                                                  d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path>
                                        </svg>
                                        <a rel="nofollow me" class="Link--primary "
                                           href="https://juejin.im/user/5cbbe37c51882532c334c324/posts">https://juejin.im/user/5cbbe37c51882532c334c324/posts</a>
                                    </li>

                                </ul>
                            </div>

                        </div>


                    </div>
                </div>

                <div class="flex-shrink-0 col-12 col-md-9 mb-4 mb-md-0">
                    <div class="UnderlineNav user-profile-nav d-block d-md-none position-sticky top-0 pl-3 ml-n3 mr-n3 pr-3 color-bg-primary"
                         style="z-index:3;">
                        <nav class="UnderlineNav-body" data-pjax aria-label="User profile">
                            <a aria-current="page" class="UnderlineNav-item selected"
                               data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:35120858,&quot;target&quot;:&quot;TAB_OVERVIEW&quot;,&quot;user_id&quot;:35120858,&quot;originating_url&quot;:&quot;https://github.com/likaia&quot;}}"
                               data-hydro-click-hmac="06a1b6a865fbe81787e023ab51992e4c0b935cdcbf5970bb0bad8c5a9b21367c"
                               href="https://github.com/likaia">
                                <svg class="octicon octicon-book UnderlineNav-octicon hide-sm" height="16"
                                     viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true">
                                    <path fill-rule="evenodd"
                                          d="M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75V1.75zm8.755 3a2.25 2.25 0 012.25-2.25H14.5v9h-3.757c-.71 0-1.4.201-1.992.572l.004-7.322zm-1.504 7.324l.004-5.073-.002-2.253A2.25 2.25 0 005.003 2.5H1.5v9h3.757a3.75 3.75 0 011.994.574z"></path>
                                </svg>
                                Overview
                            </a>
                            <a class="UnderlineNav-item"
                               data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:35120858,&quot;target&quot;:&quot;TAB_REPOSITORIES&quot;,&quot;user_id&quot;:35120858,&quot;originating_url&quot;:&quot;https://github.com/likaia&quot;}}"
                               data-hydro-click-hmac="67d059d1f50e7ba8b727a27527ce5cf008398a20a2c3a1bf6e9b350bf1f5b786"
                               href="/likaia?tab=repositories">
                                <svg class="octicon octicon-repo UnderlineNav-octicon hide-sm" height="16"
                                     viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true">
                                    <path fill-rule="evenodd"
                                          d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
                                </svg>
                                Repositories
                                <span title="48" class="Counter ">48</span>
                            </a>
                        </nav>
                        <div class="profile-color-modes js-promo-color-modes-banner-profile isInitialToggle">
                            <!-- '"` --><!-- </textarea></xmp> --></option></form>
                            <form class="js-promo-color-modes-form" action="/settings/color_mode.likaia"
                                  accept-charset="UTF-8" method="post"><input type="hidden" name="_method" value="put"/><input
                                    type="hidden" name="authenticity_token"
                                    value="h/Ye99db7ehx50LDt/KMYxnIrOZuwiXkVMuFj5h0/J822smqafpXFlFeccb3zjGtnppMhqjoYvQk+LENI6YwDQ=="/>
                                <input type="hidden" name="user_theme" value="light">
                                <input type="hidden" name="source" value="profile">
                            </form>
                            <svg aria-hidden="true" width="106" height="60" viewBox="0 0 106 60" fill="none"
                                 stroke-width="3" stroke-linecap="round" stroke-linejoin="round"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g class="profile-color-modes-illu-group profile-color-modes-illu-red">
                                    <path d="M37.5 58.5V57.5C37.5 49.768 43.768 43.5 51.5 43.5V43.5C59.232 43.5 65.5 49.768 65.5 57.5V58.5"></path>
                                </g>
                                <g class="profile-color-modes-illu-group profile-color-modes-illu-orange">
                                    <path d="M104.07 58.5C103.401 55.092 97.7635 54.3869 95.5375 57.489C97.4039 54.6411 99.7685 48.8845 94.6889 46.6592C89.4817 44.378 86.1428 50.1604 85.3786 54.1158C85.9519 50.4768 83.7226 43.294 78.219 44.6737C72.7154 46.0534 72.7793 51.3754 74.4992 55.489C74.169 54.7601 72.4917 53.3567 70.5 52.8196"></path>
                                </g>
                                <g class="profile-color-modes-illu-group profile-color-modes-illu-purple">
                                    <path d="M5.51109 58.5V52.5C5.51109 41.4543 14.4654 32.5 25.5111 32.5C31.4845 32.5 36.8464 35.1188 40.5111 39.2709C40.7212 39.5089 40.9258 39.7521 41.1245 40"></path>
                                    <path d="M27.511 49.5C29.6777 49.5 28.911 49.5 32.511 49.5"></path>
                                    <path d="M27.511 56.5C29.6776 56.5 26.911 56.5 30.511 56.5"></path>
                                </g>
                                <g class="profile-color-modes-illu-group profile-color-modes-illu-green">
                                    <circle cx="5.5" cy="12.5" r="4"></circle>
                                    <circle cx="18.5" cy="5.5" r="4"></circle>
                                    <path d="M18.5 9.5L18.5 27.5"></path>
                                    <path d="M18.5 23.5C6 23.5 5.5 23.6064 5.5 16.5"></path>
                                </g>
                                <g class="profile-color-modes-illu-group profile-color-modes-illu-blue">
                                    <g class="profile-color-modes-illu-frame">
                                        <path d="M40.6983 31.5C40.5387 29.6246 40.6456 28.0199 41.1762 27.2317C42.9939 24.5312 49.7417 26.6027 52.5428 30.2409C54.2551 29.8552 56.0796 29.6619 57.9731 29.6619C59.8169 29.6619 61.5953 29.8452 63.2682 30.211C66.0833 26.5913 72.799 24.5386 74.6117 27.2317C75.6839 28.8246 75.0259 33.7525 73.9345 37.5094C74.2013 37.9848 74.4422 38.4817 74.6555 39"></path>
                                    </g>
                                    <g class="profile-color-modes-illu-frame">
                                        <path d="M41.508 31.5C41.6336 31.2259 41.7672 30.9582 41.9085 30.6968C40.7845 26.9182 40.086 21.8512 41.1762 20.2317C42.9939 17.5312 49.7417 19.6027 52.5428 23.2409C54.2551 22.8552 56.0796 22.6619 57.9731 22.6619C59.8169 22.6619 61.5953 22.8452 63.2682 23.211C66.0833 19.5913 72.799 17.5386 74.6117 20.2317C75.6839 21.8246 75.0259 26.7525 73.9345 30.5094C75.1352 32.6488 75.811 35.2229 75.811 38.2283C75.811 38.49 75.8058 38.7472 75.7957 39"></path>
                                        <path d="M49.4996 33V35.6757"></path>
                                        <path d="M67.3375 33V35.6757"></path>
                                    </g>
                                    <g class="profile-color-modes-illu-frame">
                                        <path d="M41.508 31.5C41.6336 31.2259 41.7672 30.9582 41.9085 30.6968C40.7845 26.9182 40.086 21.8512 41.1762 20.2317C42.9939 17.5312 49.7417 19.6027 52.5428 23.2409C54.2551 22.8552 56.0796 22.6619 57.9731 22.6619C59.8169 22.6619 61.5953 22.8452 63.2682 23.211C66.0833 19.5913 72.799 17.5386 74.6117 20.2317C75.6839 21.8246 75.0259 26.7525 73.9345 30.5094C75.1352 32.6488 75.811 35.2229 75.811 38.2283C75.811 38.49 75.8058 38.7472 75.7957 39"></path>
                                    </g>
                                    <g class="profile-color-modes-illu-frame">
                                        <path d="M41.508 31.5C41.6336 31.2259 41.7672 30.9582 41.9085 30.6968C40.7845 26.9182 40.086 21.8512 41.1762 20.2317C42.9939 17.5312 49.7417 19.6027 52.5428 23.2409C54.2551 22.8552 56.0796 22.6619 57.9731 22.6619C59.8169 22.6619 61.5953 22.8452 63.2682 23.211C66.0833 19.5913 72.799 17.5386 74.6117 20.2317C75.6839 21.8246 75.0259 26.7525 73.9345 30.5094C75.1352 32.6488 75.811 35.2229 75.811 38.2283C75.811 38.49 75.8058 38.7472 75.7957 39"></path>
                                        <path d="M49.4996 33V35.6757"></path>
                                        <path d="M67.3375 33V35.6757"></path>
                                    </g>
                                    <g class="profile-color-modes-illu-frame">
                                        <path d="M41.508 31.5C41.6336 31.2259 41.7672 30.9582 41.9085 30.6968C40.7845 26.9182 40.086 21.8512 41.1762 20.2317C42.9939 17.5312 49.7417 19.6027 52.5428 23.2409C54.2551 22.8552 56.0796 22.6619 57.9731 22.6619C59.8169 22.6619 61.5953 22.8452 63.2682 23.211C66.0833 19.5913 72.799 17.5386 74.6117 20.2317C75.6839 21.8246 75.0259 26.7525 73.9345 30.5094C75.1352 32.6488 75.811 35.2229 75.811 38.2283C75.811 38.49 75.8058 38.7472 75.7957 39"></path>
                                    </g>
                                    <g class="profile-color-modes-illu-frame">
                                        <path d="M41.508 31.5C41.6336 31.2259 41.7672 30.9582 41.9085 30.6968C40.7845 26.9182 40.086 21.8512 41.1762 20.2317C42.9939 17.5312 49.7417 19.6027 52.5428 23.2409C54.2551 22.8552 56.0796 22.6619 57.9731 22.6619C59.8169 22.6619 61.5953 22.8452 63.2682 23.211C66.0833 19.5913 72.799 17.5386 74.6117 20.2317C75.6839 21.8246 75.0259 26.7525 73.9345 30.5094C75.1352 32.6488 75.811 35.2229 75.811 38.2283C75.811 38.49 75.8058 38.7472 75.7957 39"></path>
                                        <path d="M49.4996 33V35.6757"></path>
                                        <path d="M67.3375 33V35.6757"></path>
                                    </g>
                                    <g class="profile-color-modes-illu-frame">
                                        <path d="M73.4999 40.2236C74.9709 38.2049 75.8108 35.5791 75.8108 32.2283C75.8108 29.2229 75.1351 26.6488 73.9344 24.5094C75.0258 20.7525 75.6838 15.8246 74.6116 14.2317C72.7989 11.5386 66.0832 13.5913 63.2681 17.211C61.5952 16.8452 59.8167 16.6619 57.973 16.6619C56.0795 16.6619 54.2549 16.8552 52.5427 17.2409C49.7416 13.6027 42.9938 11.5312 41.176 14.2317C40.0859 15.8512 40.7843 20.9182 41.9084 24.6968C41.003 26.3716 40.4146 28.3065 40.2129 30.5"></path>
                                        <path d="M82.9458 30.5471L76.8413 31.657"></path>
                                        <path d="M76.2867 34.4319L81.8362 37.7616"></path>
                                        <path d="M49.4995 27.8242V30.4999"></path>
                                        <path d="M67.3374 27.8242V30.4998"></path>
                                    </g>
                                    <g class="profile-color-modes-illu-frame">
                                        <path d="M45.3697 34.2658C41.8877 32.1376 39.7113 28.6222 39.7113 23.2283C39.7113 20.3101 40.3483 17.7986 41.4845 15.6968C40.3605 11.9182 39.662 6.85125 40.7522 5.23168C42.5699 2.53117 49.3177 4.6027 52.1188 8.24095C53.831 7.85521 55.6556 7.66186 57.5491 7.66186C59.3929 7.66186 61.1713 7.84519 62.8442 8.21095C65.6593 4.59134 72.375 2.5386 74.1877 5.23168C75.2599 6.82461 74.6019 11.7525 73.5105 15.5094C74.7112 17.6488 75.3869 20.2229 75.3869 23.2283C75.3869 28.6222 73.2105 32.1376 69.7285 34.2658C70.8603 35.5363 72.6057 38.3556 73.3076 40"></path>
                                        <path d="M49.0747 19.8242V22.4999"></path>
                                        <path d="M54.0991 28C54.6651 29.0893 55.7863 30.0812 57.9929 30.0812C59.0642 30.0812 59.8797 29.8461 60.5 29.4788"></path>
                                        <path d="M66.9126 19.8242V22.4999"></path>
                                        <path d="M33.2533 20.0237L39.0723 22.1767"></path>
                                        <path d="M39.1369 25.0058L33.0935 27.3212"></path>
                                        <path d="M81.8442 19.022L76.0252 21.1751"></path>
                                        <path d="M75.961 24.0041L82.0045 26.3196"></path>
                                    </g>
                                    <g class="profile-color-modes-illu-frame">
                                        <path d="M73.4999 40.2236C74.9709 38.2049 75.8108 35.5791 75.8108 32.2283C75.8108 29.2229 75.1351 26.6488 73.9344 24.5094C75.0258 20.7525 75.6838 15.8246 74.6116 14.2317C72.7989 11.5386 66.0832 13.5913 63.2681 17.211C61.5952 16.8452 59.8167 16.6619 57.973 16.6619C56.0795 16.6619 54.2549 16.8552 52.5427 17.2409C49.7416 13.6027 42.9938 11.5312 41.176 14.2317C40.0859 15.8512 40.7843 20.9182 41.9084 24.6968C41.003 26.3716 40.4146 28.3065 40.2129 30.5"></path>
                                        <path d="M82.9458 30.5471L76.8413 31.657"></path>
                                        <path d="M76.2867 34.4319L81.8362 37.7616"></path>
                                        <path d="M49.4995 27.8242V30.4999"></path>
                                        <path d="M67.3374 27.8242V30.4998"></path>
                                    </g>
                                    <g class="profile-color-modes-illu-frame">
                                        <path d="M40.6983 31.5C40.5387 29.6246 40.6456 28.0199 41.1762 27.2317C42.9939 24.5312 49.7417 26.6027 52.5428 30.2409C54.2551 29.8552 56.0796 29.6619 57.9731 29.6619C59.8169 29.6619 61.5953 29.8452 63.2682 30.211C66.0833 26.5913 72.799 24.5386 74.6117 27.2317C75.6839 28.8246 75.0259 33.7525 73.9345 37.5094C74.2013 37.9848 74.4422 38.4817 74.6555 39"></path>
                                    </g>
                                </g>
                            </svg>
                            <span
                                    class="profile-color-modes-toggle js-promo-color-modes-toggle"
                                    role="checkbox"
                                    aria-checked="true"
                                    aria-label="Toggle dark mode"
                                    tabindex="0"
                            >
    <div class="profile-color-modes-toggle-track"></div>
    <div class="profile-color-modes-toggle-thumb">
      <svg style="fill: var(--color-profile-color-modes-toggle-moon); margin: 7px 0 0 7px;" aria-hidden="true"
           width="14" height="13" viewBox="0 0 14 13" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M4.52208 7.71754C7.5782 7.71754 10.0557 5.24006 10.0557 2.18394C10.0557 1.93498 10.0392 1.68986 10.0074 1.44961C9.95801 1.07727 10.3495 0.771159 10.6474 0.99992C12.1153 2.12716 13.0615 3.89999 13.0615 5.89383C13.0615 9.29958 10.3006 12.0605 6.89485 12.0605C3.95334 12.0605 1.49286 10.001 0.876728 7.24527C0.794841 6.87902 1.23668 6.65289 1.55321 6.85451C2.41106 7.40095 3.4296 7.71754 4.52208 7.71754Z"></path>
      </svg>
    </div>
  </span>

                        </div>


                    </div>
                    <div>


                        <div class="position-relative">

                            <div class="Box mt-4">
                                <div class="Box-body p-4">
                                    <div class="d-flex flex-justify-between">
                                        <div class="text-mono text-small mb-3">
                                            <svg class="octicon octicon-octoface" viewBox="0 0 16 16" version="1.1"
                                                 width="16" height="16" aria-hidden="true">
                                                <path fill-rule="evenodd"
                                                      d="M1.326 1.973a1.2 1.2 0 011.49-.832c.387.112.977.307 1.575.602.586.291 1.243.71 1.7 1.296.022.027.042.056.061.084A13.22 13.22 0 018 3c.67 0 1.289.037 1.861.108l.051-.07c.457-.586 1.114-1.004 1.7-1.295a9.654 9.654 0 011.576-.602 1.2 1.2 0 011.49.832c.14.493.356 1.347.479 2.29.079.604.123 1.28.07 1.936.541.977.773 2.11.773 3.301C16 13 14.5 15 8 15s-8-2-8-5.5c0-1.034.238-2.128.795-3.117-.08-.712-.034-1.46.052-2.12.122-.943.34-1.797.479-2.29zM8 13.065c6 0 6.5-2 6-4.27C13.363 5.905 11.25 5 8 5s-5.363.904-6 3.796c-.5 2.27 0 4.27 6 4.27z"></path>
                                                <path d="M4 8a1 1 0 012 0v1a1 1 0 01-2 0V8zm2.078 2.492c-.083-.264.146-.492.422-.492h3c.276 0 .505.228.422.492C9.67 11.304 8.834 12 8 12c-.834 0-1.669-.696-1.922-1.508zM10 8a1 1 0 112 0v1a1 1 0 11-2 0V8z"></path>
                                            </svg>
                                            <a href="/likaia/likaia" class="no-underline Link--primary">likaia</a><span
                                                class="color-text-tertiary d-inline-block"
                                                style="padding:0px 2px;">/</span>README<span
                                                class="color-text-tertiary">.md</span>
                                        </div>
                                    </div>
                                    <article class="markdown-body entry-content container-lg f5" itemprop="text">
                                        <h3><a id="user-content-hey我是神奇的程序员-" class="anchor" aria-hidden="true"
                                               href="#hey我是神奇的程序员-">
                                            <svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1"
                                                 width="16" height="16" aria-hidden="true">
                                                <path fill-rule="evenodd"
                                                      d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path>
                                            </svg>
                                        </a>Hey，我是神奇的程序员 <a target="_blank" rel="noopener noreferrer"
                                                            href="https://camo.githubusercontent.com/e8e7b06ecf583bc040eb60e44eb5b8e0ecc5421320a92929ce21522dbc34c891/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f6876524a434c467a6361737252346961377a2f67697068792e676966"><img
                                                src="https://camo.githubusercontent.com/e8e7b06ecf583bc040eb60e44eb5b8e0ecc5421320a92929ce21522dbc34c891/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f6876524a434c467a6361737252346961377a2f67697068792e676966"
                                                width="25px"
                                                data-canonical-src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
                                                style="max-width:100%;"></a></h3>
                                        <br>
                                        <p>你好， 我是 <a href="https://juejin.cn/user/3984285870859614" rel="nofollow">神奇的程序员</a>
                                            ，出生于2000年，一位将近2年工作经验的前端开发工程师。</p>
                                        <p>你可能很好奇我的经历，正常来讲，这个年龄应该还在读大学，而你就已经有将近2年的工作经验了。此事说来话长，感兴趣的开发者请移步：<a
                                                href="https://juejin.cn/post/6844904025746309133" rel="nofollow">一枚19岁程序员的自学之路</a>
                                        </p>
                                        <p><a target="_blank" rel="noopener noreferrer"
                                              href="./img/code.gif"><img
                                                align="right" alt="GIF"
                                                src="./img/code.gif" width="430"
                                                height="100%" style="max-width:100%;"></a></p>
                                        <ul>
                                            <li>
                                                💬 如果你对我感兴趣，可以加我<a
                                                    href="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6a64ceb9e91949f3b643a8cf603f983b~tplv-k3u1fbpfcp-watermark.image"
                                                    rel="nofollow">微信</a> 进一步交流
                                            </li>
                                            <li>
                                                📫 我的邮箱: <a href="mailto:1195419506@qq.com">1195419506@qq.com</a>
                                            </li>
                                            <li>
                                                📝 <a href="https://juejin.cn/user/3984285870859614" rel="nofollow">我的掘金(开源社区)主页</a>
                                            </li>
                                        </ul>
                                        <p><strong>技术栈 与 开发工具:</strong></p>
                                        <p><code><a target="_blank" rel="noopener noreferrer"
                                                    href="./img/javascript.png"><img
                                                height="20"
                                                src="./img/javascript.png"
                                                style="max-width:100%;"></a></code>
                                            <code><a target="_blank" rel="noopener noreferrer"
                                                     href="./img/typescript.png"><img
                                                    height="20"
                                                    src="./img/typescript.png"
                                                    style="max-width:100%;"></a></code>
                                            <code><a target="_blank" rel="noopener noreferrer"
                                                     href="./img/vue.png"><img
                                                    height="20"
                                                    src="./img/vue.png"
                                                    style="max-width:100%;"></a></code>
                                            <code><a target="_blank" rel="noopener noreferrer"
                                                     href="./img/git.png"><img
                                                    height="20"
                                                    src="./img/git.png"
                                                    style="max-width:100%;"></a></code>
                                            <code><a target="_blank" rel="noopener noreferrer"
                                                     href="./img/webstorm.png"><img
                                                    height="20"
                                                    src="./img/webstorm.png"
                                                    style="max-width:100%;"></a></code></p>
                                        <p><strong>我的开源项目:</strong></p>
                                        <p><a href="https://github.com/likaia/chat-system"><img
                                                id="projectCard"
                                                src="https://www.kaisir.cn/uploads/home-page/img/light-chat-system.svg"
                                                alt="chat-system"
                                                style="max-width:100%;"></a></p>
                                        <hr>
                                        <p>

                                            <strong>😉 我的自学之路:</strong></p>
                                        <details>
                                            <summary>2016年</summary>
                                            <div>
                                                <div style="width: 100%; height: 10px"></div>
                                                <ul>
                                                    <li>7月入坑某华。</li>
                                                    <li>10月参加成人高考(大专)。</li>
                                                    <li>11月开始自学C语言。</li>
                                                </ul>
                                            </div>
                                        </details>
                                        <details>
                                            <summary>2017年</summary>
                                            <div>
                                                <div style="width: 100%; height: 10px"></div>
                                                <ul>
                                                    <li>4月结束C语言的学习，开始自学Java。</li>
                                                    <li>9月结束Java的学习。</li>
                                                    <li>10月开始自学前端（HTML、CSS、JS、Jquery）。</li>
                                                    <li>11月仿写京东首页前端页面。</li>
                                                </ul>
                                            </div>
                                        </details>
                                        <details>
                                            <summary>2018年</summary>
                                            <div>
                                                <div style="width: 100%; height: 10px"></div>
                                                <ul>
                                                    <li>
                                                        5月结束前端学习，开始投简历，投递10多天后，因为我年龄小，没有公司愿意要我，后来跟着同学去了他亲戚公司，老板让我们做个拥有增删改查功能的管理系统，如果做出来了，可以去他公司实习。
                                                    </li>
                                                    <li>6月底，我们做出了这个管理系统，得到了老板的认可。</li>
                                                    <li>7月进入同学亲戚公司开始实习。</li>
                                                </ul>
                                            </div>
                                        </details>
                                        <details>
                                            <summary>2019年</summary>
                                            <div>
                                                <div style="width: 100%; height: 10px"></div>
                                                <ul>
                                                    <li>4月中旬从同学亲戚公司辞职，回家调整了半个月。</li>
                                                    <li>
                                                        5月决定去广州闯一闯，买了10号的特价机票飞到了广州，刚开始收到2家公司的面试邀请，但由于我没经验，未通过面试，再后来就约不到面试了，招聘软件全部已读未回，在投简历10天后，还是没面试邀请，我决定开始根据招聘网站上的公司地址去上门面试，争取个机会。
                                                    </li>
                                                    <li>6月面试通过，进入现在的公司。</li>
                                                    <li>7月某华毕业，拿到大专毕业证。</li>
                                                    <li>9月当上前端开发组组长。</li>
                                                    <li>11月开始在掘金写文章，分享日常所学以及项目开发中遇到的难题。</li>
                                                </ul>
                                            </div>
                                        </details>
                                        <details>
                                            <summary>2020年</summary>
                                            <div>
                                                <div style="width: 100%; height: 10px"></div>
                                                <ul>
                                                    <li>1月创建开源项目chat-system，实现了一些简单的功能。</li>
                                                    <li>2月中旬开始学习数据结构与算法。</li>
                                                    <li>6月开始学习TypeScript，并用其实现基础的数据解构和算法。</li>
                                                    <li>9月底结束数据结构与算法的学习。</li>
                                                    <li>10月学习Vue3.0，并用其重构我的开源项目chat-system。</li>
                                                    <li>11月开始完善开源项目chat-system。</li>
                                                </ul>
                                            </div>
                                        </details>
                                        <details>
                                            <summary>2021年</summary>
                                            <div>
                                                <div style="width: 100%; height: 10px"></div>
                                                <ul>
                                                    <li>2月中旬，完成开源项目chat-system的基础功能：群聊、单聊、好友管理、图文混输/并发、自定义截屏等功能。</li>
                                                    <li>3月开始钻研JS底层原理、Vue源码。</li>
                                                </ul>
                                            </div>
                                        </details>
                                        <hr>
                                        <p>
                                            <strong>✍️ 我的文章:</strong></p>
                                        <details>
                                            <summary>Vue项目踩坑经验总结</summary>
                                            <div>
                                                <div style="width: 100%; height: 10px"></div>
                                                <ul>
                                                    <li><a href="https://juejin.cn/post/6844904013666713607"
                                                           rel="nofollow">Vue实现base64编码图片间的切换</a></li>
                                                    <li><a href="https://juejin.cn/post/6844904008016986120"
                                                           rel="nofollow">Vue实现图片与文字混输</a></li>
                                                    <li><a href="https://juejin.cn/post/6844904013020790798"
                                                           rel="nofollow">Vue实现字符串中自定义标识符的解析渲染</a></li>
                                                    <li><a href="https://juejin.cn/post/6844904016288350216"
                                                           rel="nofollow">Vue实现渲染数据后控制滚动条位置</a></li>
                                                    <li><a href="https://juejin.cn/post/6844904031689670670"
                                                           rel="nofollow">Vue实现跨项目间的数据访问</a></li>
                                                    <li><a href="https://juejin.cn/post/6844904034197848071"
                                                           rel="nofollow">Vue合理配置WebSocket并实现群聊</a></li>
                                                    <li><a href="https://juejin.cn/post/6844904037930778638"
                                                           rel="nofollow">Vue解析剪切板图片并实现发送功能</a></li>
                                                    <li><a href="https://juejin.cn/post/6844904055647518727"
                                                           rel="nofollow">Vue实现可编辑div获取焦点</a></li>
                                                    <li><a href="https://juejin.cn/post/6844904056448614413"
                                                           rel="nofollow">Vue实现剪切板图片压缩</a></li>
                                                    <li><a href="https://juejin.cn/post/6844904057975341070"
                                                           rel="nofollow">Vue关闭线上源码移除console</a></li>
                                                    <li><a href="https://juejin.cn/post/6844904082574950413"
                                                           rel="nofollow">Vue实现文件中的的实例访问</a></li>
                                                    <li><a href="https://juejin.cn/post/6844904119702929422"
                                                           rel="nofollow">Vue实现Layui的集成</a></li>
                                                    <li><a href="https://juejin.cn/post/6844904086777659399"
                                                           rel="nofollow">axios发起http请求的一些细节</a></li>
                                                    <li><a href="https://juejin.cn/post/6885376102596870158"
                                                           rel="nofollow">使用Vue3重构Vue2项目</a></li>
                                                    <li><a href="https://juejin.cn/post/6902420248851382285"
                                                           rel="nofollow">使用Vue自定义指令实现右键菜单</a></li>
                                                    <li><a href="https://juejin.cn/post/6917592199140458504"
                                                           rel="nofollow">使用Vue3的CompositionAPI来优化代码量</a></li>
                                                    <li><a href="https://juejin.cn/post/6931901091445473293"
                                                           rel="nofollow">实现图文消息的正确加载</a></li>
                                                    <li><a href="https://juejin.cn/post/6935811262752227335"
                                                           rel="nofollow">实现Web端指纹登录</a></li>
                                                    <li><a href="https://juejin.cn/post/6844904110957789192"
                                                           rel="nofollow">微信小程序动态tabBar的几种实现方法</a></li>
                                                </ul>
                                            </div>
                                        </details>
                                        <details>
                                            <summary>插件开发系列</summary>
                                            <div>
                                                <div style="width: 100%; height: 10px"></div>
                                                <ul>
                                                    <li><a href="https://juejin.cn/post/6890572689799380999"
                                                           rel="nofollow">使用Vue3+TS重构百星websocket插件</a></li>
                                                    <li><a href="https://juejin.cn/post/6924368956950052877"
                                                           rel="nofollow">实现Web端自定义截屏</a></li>
                                                    <li><a href="https://juejin.cn/post/6906788973981466637"
                                                           rel="nofollow">使用vue封装右键菜单插件</a></li>
                                                    <li><a href="https://juejin.cn/post/6907428535510499336"
                                                           rel="nofollow">使用CLI开发一个Vue3的npm库</a></li>
                                                </ul>
                                            </div>
                                        </details>
                                        <details>
                                            <summary>CSS实战系列</summary>
                                            <div>
                                                <div style="width: 100%; height: 10px"></div>
                                                <ul>
                                                    <li><a href="https://juejin.cn/post/6844904053437120526"
                                                           rel="nofollow">CSS实现多层嵌套结构最外层旋转其它层不旋转效果</a></li>
                                                </ul>
                                            </div>
                                        </details>
                                        <details>
                                            <summary>JS实战系列</summary>
                                            <div>
                                                <div style="width: 100%; height: 10px"></div>
                                                <ul>
                                                    <li><a href="https://juejin.cn/post/6931901091445473293"
                                                           rel="nofollow">实现Web端自定义截屏(JS版)</a></li>
                                                    <li><a href="https://juejin.cn/post/6908748150719299598"
                                                           rel="nofollow">使用JS将聊天记录聚合在一起</a></li>
                                                    <li><a href="https://juejin.cn/post/6910038190829076488"
                                                           rel="nofollow">使用JS实现图文混发</a></li>
                                                    <li><a href="https://juejin.cn/post/6896878775665950733"
                                                           rel="nofollow">使用antd表格组件实现日程表</a></li>
                                                    <li><a href="https://juejin.cn/post/6844904164326129672"
                                                           rel="nofollow">JSON数据归类的实现</a></li>
                                                    <li><a href="https://juejin.cn/post/6844904152305238029"
                                                           rel="nofollow">DOM转JSON的实现</a></li>
                                                </ul>
                                            </div>
                                        </details>
                                        <details>
                                            <summary>JS原理学习系列</summary>
                                            <div>
                                                <div style="width: 100%; height: 10px"></div>
                                                <ul>
                                                    <li><a href="https://juejin.cn/post/6937688619503058974"
                                                           rel="nofollow">路线规划</a></li>
                                                    <li><a href="https://juejin.cn/post/6937688619503058974"
                                                           rel="nofollow">深入理解原型链与继承</a></li>
                                                    <li><a href="https://juejin.cn/post/6942319196797665288">深入理解作用域和闭包</a></li>
                                                </ul>
                                            </div>
                                        </details>
                                        <details>
                                            <summary>数据解构与算法基础</summary>
                                            <div>
                                                <div style="width: 100%; height: 10px"></div>
                                                <ul>
                                                    <li><a href="https://juejin.cn/post/6844904066368323597"
                                                           rel="nofollow">前端如何学习数据结构与算法</a></li>
                                                    <li><a href="https://juejin.cn/post/6844904067194421255"
                                                           rel="nofollow">数据结构与算法基础知识</a></li>
                                                    <li><a href="https://juejin.cn/post/6844904067651600392"
                                                           rel="nofollow">数据结构:链表的基础知识</a></li>
                                                    <li><a href="https://juejin.cn/post/6844904068163305480"
                                                           rel="nofollow">数据结构:数组的基础知识</a></li>
                                                    <li><a href="https://juejin.cn/post/6844904069102829581"
                                                           rel="nofollow">数据结构:栈与队列</a></li>
                                                    <li><a href="https://juejin.cn/post/6844904070549864461"
                                                           rel="nofollow">数据结构:哈希表</a></li>
                                                    <li><a href="https://juejin.cn/post/6844904070969294856"
                                                           rel="nofollow">数据结构:堆</a></li>
                                                    <li><a href="https://juejin.cn/post/6844904078267547661"
                                                           rel="nofollow">数据结构:二叉查找树</a></li>
                                                    <li><a href="https://juejin.cn/post/6844904079093661709"
                                                           rel="nofollow">排序算法:冒泡排序</a></li>
                                                    <li><a href="https://juejin.cn/post/6844904082474270733"
                                                           rel="nofollow">排序算法:选择排序</a></li>
                                                    <li><a href="https://juejin.cn/post/6844904083996803086"
                                                           rel="nofollow">排序算法:插入排序</a></li>
                                                    <li><a href="https://juejin.cn/post/6844904105563930638"
                                                           rel="nofollow">排序算法:堆排序的理解与实现</a></li>
                                                    <li><a href="https://juejin.cn/post/6844904114380357640"
                                                           rel="nofollow">排序算法:归并排序的理解与实现</a></li>
                                                    <li><a href="https://juejin.cn/post/6844904122274185224"
                                                           rel="nofollow">排序算法:快速排序的理解与实现</a></li>
                                                    <li><a href="https://juejin.cn/post/6844904126266998797"
                                                           rel="nofollow">排序算法:快速排序优化 =&gt; 三路快排的理解与实现</a></li>
                                                    <li><a href="https://juejin.cn/post/6844904130570354696"
                                                           rel="nofollow">数组查找: 线性查找与二分查找</a></li>
                                                    <li><a href="https://juejin.cn/post/6844904132046749704"
                                                           rel="nofollow">图的认识</a></li>
                                                    <li><a href="https://juejin.cn/post/6844904133204377608"
                                                           rel="nofollow">广度优先搜索的理解与简单实现</a></li>
                                                    <li><a href="https://juejin.cn/post/6844904142658338830"
                                                           rel="nofollow">深度优先搜索的理解与简单实现</a></li>
                                                </ul>
                                            </div>
                                        </details>
                                        <details>
                                            <summary>数据解构与算法实现（TypeScript）</summary>
                                            <div>
                                                <div style="width: 100%; height: 10px"></div>
                                                <ul>
                                                    <li><a href="https://juejin.cn/post/6844904165374689287"
                                                           rel="nofollow">数组实现栈与对象实现栈的区别</a></li>
                                                    <li><a href="https://juejin.cn/post/6844904166867861512"
                                                           rel="nofollow">队列与双端队列的实现</a></li>
                                                    <li><a href="https://juejin.cn/post/6844904176229548039"
                                                           rel="nofollow">链表与变相链表的实现</a></li>
                                                    <li><a href="https://juejin.cn/post/6844904181170438151"
                                                           rel="nofollow">集合的实现</a></li>
                                                    <li><a href="https://juejin.cn/post/6844904190787993607"
                                                           rel="nofollow">TypeScript实现Map与HashMap</a></li>
                                                    <li><a href="https://juejin.cn/post/6844904197612109838"
                                                           rel="nofollow">递归的理解与实现</a></li>
                                                    <li><a href="https://juejin.cn/post/6847902219216355341"
                                                           rel="nofollow">TypeScript实现二叉搜索树</a></li>
                                                    <li><a href="https://juejin.cn/post/6850037259375214605"
                                                           rel="nofollow">TypeScript实现AVL树与红黑树</a></li>
                                                    <li><a href="https://juejin.cn/post/6854573211197046791"
                                                           rel="nofollow">TypeScript实现二叉堆</a></li>
                                                    <li><a href="https://juejin.cn/post/6854573217252655111"
                                                           rel="nofollow">TypeScript实现图</a></li>
                                                    <li><a href="https://juejin.cn/post/6854573208776114184"
                                                           rel="nofollow">TypeScript实现图的遍历</a></li>
                                                    <li><a href="https://juejin.cn/post/6860501233308794887"
                                                           rel="nofollow">TypeScript实现八大排序与搜索算法
                                                    </a></li>
                                                    <li><a href="https://juejin.cn/post/6869431300416077837"
                                                           rel="nofollow">TypeScript实现向量与矩阵
                                                    </a></li>
                                                    <li><a href="https://juejin.cn/post/6869571836066299912"
                                                           rel="nofollow">TypeScript实现动态规划</a></li>
                                                    <li><a href="https://juejin.cn/post/6872022498326609933"
                                                           rel="nofollow">TypeScript实现贪心算法与回溯算法</a></li>
                                                </ul>
                                            </div>
                                        </details>
                                        <details>
                                            <summary>算法题解析系列</summary>
                                            <div>
                                                <div style="width: 100%; height: 10px"></div>
                                                <ul>
                                                    <li><a href="https://juejin.cn/post/6873436480430309390"
                                                           rel="nofollow">寻找数组中的重复数字</a></li>
                                                    <li><a href="https://juejin.cn/post/6877765688451137544"
                                                           rel="nofollow">重建二叉树</a></li>
                                                    <li><a href="https://juejin.cn/post/6934487015970832391"
                                                           rel="nofollow">寻找二叉树的下一个节点</a></li>
                                                    <li><a href="https://juejin.cn/post/6934700390428934152"
                                                           rel="nofollow">队列实现栈&amp;栈实现队列</a></li>
                                                </ul>
                                            </div>
                                        </details>
                                        <details>
                                            <summary>安全算法系列</summary>
                                            <div>
                                                <div style="width: 100%; height: 10px"></div>
                                                <ul>
                                                    <li><a href="https://juejin.cn/post/6844904145997004807"
                                                           rel="nofollow">数据传输过程中可能遇到的安全问题以及解决方案</a></li>
                                                    <li><a href="https://juejin.cn/post/6844904146470977549"
                                                           rel="nofollow">哈希函数的理解</a></li>
                                                    <li><a href="https://juejin.cn/post/6844904147787972615"
                                                           rel="nofollow">共享密钥加密与公开密钥加密</a></li>
                                                    <li><a href="https://juejin.cn/post/6844904148324843533"
                                                           rel="nofollow">混合加密的理解</a></li>
                                                    <li><a href="https://juejin.cn/post/6844904155044118535"
                                                           rel="nofollow">迪菲赫尔曼密钥交换的理解</a></li>
                                                    <li><a href="https://juejin.cn/post/6844904158319869960"
                                                           rel="nofollow">消息认证码与数字签名的理解</a></li>
                                                    <li><a href="https://juejin.cn/post/6844904159347474439"
                                                           rel="nofollow">数字证书的理解</a></li>
                                                </ul>
                                            </div>
                                        </details>
                                        <details>
                                            <summary>代码格式规范</summary>
                                            <div>
                                                <div style="width: 100%; height: 10px"></div>
                                                <ul>
                                                    <li><a href="https://juejin.cn/post/6850418115995287566"
                                                           rel="nofollow">独立使用ESLint+Prettier对代码进行格式校验</a></li>
                                                    <li><a href="https://juejin.cn/post/6899323798676307976"
                                                           rel="nofollow">VSCode合理配置ESLint+Prettier</a></li>
                                                    <li><a href="https://juejin.cn/post/6898894346695737352"
                                                           rel="nofollow">使用commitizen实现按团队规范提交代码</a></li>
                                                </ul>
                                            </div>
                                        </details>
                                        <details>
                                            <summary>个人成长系列</summary>
                                            <div>
                                                <div style="width: 100%; height: 10px"></div>
                                                <ul>
                                                    <li><a href="https://juejin.cn/post/6844904025746309133"
                                                           rel="nofollow">一枚19岁程序员的自学之路</a></li>
                                                    <li><a href="https://juejin.cn/post/6844904111238807566"
                                                           rel="nofollow">从面试者到前端开发组组长的成长之路</a></li>
                                                    <li><a href="https://juejin.cn/post/6844904117517680647"
                                                           rel="nofollow">一枚前端开发组组长的述职报告</a></li>
                                                </ul>
                                            </div>
                                        </details>
                                        <details>
                                            <div style="width: 100%; height: 10px"></div>
                                            <summary>开发工具系列</summary>
                                            <div>
                                                <ul>
                                                    <li><a href="https://juejin.cn/post/6844904005643010055"
                                                           rel="nofollow">WebStorm 2019.3版本推送了</a></li>
                                                    <li><a href="https://juejin.cn/post/6844904120902483981"
                                                           rel="nofollow">WebStorm 2020.1版本使用体验</a></li>
                                                    <li><a href="https://juejin.cn/post/6854573221589712904"
                                                           rel="nofollow">WebStorm 2020.2版本使用体验</a></li>
                                                </ul>
                                            </div>
                                        </details>
                                        <details>
                                            <summary>新技术学习系列</summary>
                                            <div>
                                                <div style="width: 100%; height: 10px"></div>
                                                <ul>
                                                    <li><a href="https://juejin.cn/post/6855129006564786183"
                                                           rel="nofollow">Deno的简单运用</a></li>
                                                </ul>
                                            </div>
                                        </details>
                                        <hr>
                                        <p>
                                            <g-emoji class="g-emoji" alias="smiling_face_with_three_hearts"
                                                     fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f970.png">
                                                🥰
                                            </g-emoji>
                                            <strong>社区粉丝:</strong></p>
                                        <p>在掘金社区拥有 <a href="https://juejin.cn/user/3984285870859614/followers"
                                                      rel="nofollow">1780+</a> 粉丝，部分粉丝如下：</p>
                                        <!--START_SECTION:top-followers-->
                                        <div style="width: 100%; min-height: 40px; display: flex; flex-wrap: wrap;">
                                            <div style="width: 40px;height: 40px; margin-right: 10px;margin-bottom: 10px; border-radius: 50%; overflow: hidden">
                                                <a href="https://juejin.cn/user/272334612343901"><img style="width: 40px;" src="https://sf3-ttcdn-tos.pstatp.com/img/user-avatar/562d149bae5ee331ddd2f00f2e3c4f61~300x300.image" alt=""></a>
                                            </div>

                                            <div style="width: 40px;margin-right: 10px;margin-bottom: 10px;height: 40px; border-radius: 50%; overflow: hidden">
                                                <a href="https://juejin.cn/user/1635716486928599"><img style="width: 40px;" src="https://sf1-ttcdn-tos.pstatp.com/img/user-avatar/4c8a85f07748f0e5792745328d0939f4~300x300.image" alt=""></a>
                                            </div>

                                            <div style="width: 40px;margin-right: 10px;margin-bottom: 10px;height: 40px; border-radius: 50%; overflow: hidden">
                                                <a href="https://juejin.cn/user/3790771823314397"><img style="width: 40px;" src="https://sf1-ttcdn-tos.pstatp.com/img/user-avatar/79e2524e4420a03aafb65370a7d112b4~300x300.image" alt=""></a>
                                            </div>

                                            <div style="width: 40px;margin-right: 10px;margin-bottom: 10px;height: 40px; border-radius: 50%; overflow: hidden">
                                                <a href="https://juejin.cn/user/8451823243464"><img style="width: 40px;" src="https://sf3-ttcdn-tos.pstatp.com/img/user-avatar/e50a6cb24985046450f195f2c65e0b17~300x300.image" alt=""></a>
                                            </div>

                                            <div style="width: 40px;margin-right: 10px;margin-bottom: 10px;height: 40px; border-radius: 50%; overflow: hidden">
                                                <a href="https://juejin.cn/user/1908407918137543"><img style="width: 40px;" src="https://sf6-ttcdn-tos.pstatp.com/img/user-avatar/f36281fddb0e4b0f467e89dfcf5234aa~300x300.image" alt=""></a>
                                            </div>

                                            <div style="width: 40px;margin-right: 10px;margin-bottom: 10px;height: 40px; border-radius: 50%; overflow: hidden">
                                                <a href="https://juejin.cn/user/1451011080206301/"><img style="width: 40px;" src="https://sf1-ttcdn-tos.pstatp.com/img/user-avatar/9d45264cabea4c31bb72b79c5fd264b4~300x300.image" alt=""></a>
                                            </div>

                                            <div style="width: 40px;margin-right: 10px;margin-bottom: 10px;height: 40px; border-radius: 50%; overflow: hidden">
                                                <a href="https://juejin.cn/user/2541726616270631"><img style="width: 40px;" src="https://sf3-ttcdn-tos.pstatp.com/img/user-avatar/5d58fb00f7bc3b5b06f36f3a3899b703~300x300.image" alt=""></a>
                                            </div>

                                            <div style="width: 40px;margin-right: 10px;margin-bottom: 10px;height: 40px; border-radius: 50%; overflow: hidden">
                                                <a href="https://juejin.cn/user/958429872270519"><img style="width: 40px;" src="https://sf6-ttcdn-tos.pstatp.com/img/user-avatar/56a7a0b76dc7d3d2c57700f13cf2423d~300x300.image" alt=""></a>
                                            </div>

                                            <div style="width: 40px;margin-right: 10px;margin-bottom: 10px;height: 40px; border-radius: 50%; overflow: hidden">
                                                <a href="https://juejin.cn/user/3966693685596536"><img style="width: 40px;" src="https://sf3-ttcdn-tos.pstatp.com/img/user-avatar/8e478ea0d12a45ef641934d195aca346~300x300.image" alt=""></a>
                                            </div>

                                            <div style="width: 40px;margin-right: 10px;margin-bottom: 10px;height: 40px; border-radius: 50%; overflow: hidden">
                                                <a href="https://juejin.cn/user/3069492196818462"><img style="width: 40px;" src="https://mirror-gold-cdn.xitu.io/16ba96f634568a6078e?imageView2/1/w/180/h/180/q/85/format/webp/interlace/1" alt=""></a>
                                            </div>

                                            <div style="width: 40px;margin-right: 10px;margin-bottom: 10px;height: 40px; border-radius: 50%; overflow: hidden">
                                                <a href="https://juejin.cn/user/1521379825427886"><img style="width: 40px;" src="https://sf6-ttcdn-tos.pstatp.com/img/user-avatar/e05b194feceb814e1e4ea27a136bf696~300x300.image" alt=""></a>
                                            </div>

                                            <div style="width: 40px;margin-right: 10px;margin-bottom: 10px;height: 40px; border-radius: 50%; overflow: hidden">
                                                <a href="https://juejin.cn/user/923245498613358"><img style="width: 40px;" src="https://sf3-ttcdn-tos.pstatp.com/img/user-avatar/06ee17af1c382ea10fc36303a2225d81~300x300.image" alt=""></a>
                                            </div>

                                            <div style="width: 40px;margin-right: 10px;margin-bottom: 10px;height: 40px; border-radius: 50%; overflow: hidden">
                                                <a href="https://juejin.cn/user/1566134677019511"><img style="width: 40px;" src="https://sf3-ttcdn-tos.pstatp.com/img/user-avatar/3fe870b6ccbf5c3e6c87d5ed9aec3e5d~300x300.image" alt=""></a>
                                            </div>

                                            <div style="width: 40px;margin-right: 10px;margin-bottom: 10px;height: 40px; border-radius: 50%; overflow: hidden">
                                                <a href="https://juejin.cn/user/3632442149443800"><img style="width: 40px;" src="https://user-gold-cdn.xitu.io/2019/1/15/1685093b12fc87f0?imageView2/1/w/180/h/180/q/85/format/webp/interlace/1" alt=""></a>
                                            </div>

                                            <div style="width: 40px;margin-right: 10px;margin-bottom: 10px;height: 40px; border-radius: 50%; overflow: hidden">
                                                <a href="https://juejin.cn/user/4187370564102119"><img style="width: 40px;" src="https://sf1-ttcdn-tos.pstatp.com/img/user-avatar/c8e67b859a0447ac91fd1f0d86148113~300x300.image" alt=""></a>
                                            </div>

                                            <div style="width: 40px;margin-right: 10px;margin-bottom: 10px;height: 40px; border-radius: 50%; overflow: hidden">
                                                <a href="https://juejin.cn/user/3940246036941687"><img style="width: 40px;" src="https://sf3-ttcdn-tos.pstatp.com/img/user-avatar/de8428ea9e3f913428820aab802662a7~300x300.image" alt=""></a>
                                            </div>

                                            <div style="width: 40px;margin-right: 10px;margin-bottom: 10px;height: 40px; border-radius: 50%; overflow: hidden">
                                                <a href="https://juejin.cn/user/3421335915345271"><img style="width: 40px;" src="https://sf3-ttcdn-tos.pstatp.com/img/user-avatar/25ff2b78045c36b850bd79061b9ea8c0~300x300.image" alt=""></a>
                                            </div>

                                            <div style="width: 40px;margin-right: 10px;margin-bottom: 10px;height: 40px; border-radius: 50%; overflow: hidden">
                                                <a href="https://juejin.cn/user/685726195534029"><img style="width: 40px;" src="https://sf3-ttcdn-tos.pstatp.com/img/user-avatar/8b6c48b97d995b6feef390d42b16a5e1~300x300.image" alt=""></a>
                                            </div>

                                            <div style="width: 40px;margin-right: 10px;margin-bottom: 10px;height: 40px; border-radius: 50%; overflow: hidden">
                                                <a href="https://juejin.cn/user/4019470242417325"><img style="width: 40px;" src="https://mirror-gold-cdn.xitu.io/168e0927660e7f599ae?imageView2/1/w/180/h/180/q/85/format/webp/interlace/1" alt=""></a>
                                            </div>

                                            <div style="width: 40px;margin-right: 10px;margin-bottom: 10px;height: 40px; border-radius: 50%; overflow: hidden">
                                                <a href="https://juejin.cn/user/4248168662053118"><img style="width: 40px;" src="https://sf6-ttcdn-tos.pstatp.com/img/user-avatar/786c34dde5ec4abffa1257890f8f8782~300x300.image" alt=""></a>
                                            </div>

                                            <div style="width: 40px;margin-right: 10px;margin-bottom: 10px;height: 40px; border-radius: 50%; overflow: hidden">
                                                <a href="https://juejin.cn/user/3051900006829837"><img style="width: 40px;" src="https://user-gold-cdn.xitu.io/2018/1/26/1613202e3f327109?imageView2/1/w/180/h/180/q/85/format/webp/interlace/1" alt=""></a>
                                            </div>

                                            <div style="width: 40px;margin-right: 10px;margin-bottom: 10px;height: 40px; border-radius: 50%; overflow: hidden">
                                                <a href="https://juejin.cn/user/2770425029603800"><img style="width: 40px;" src="https://lc-gold-cdn.xitu.io/343Wr8EtVSCDYFWUDmnjMWA?imageView2/1/w/180/h/180/q/85/format/webp/interlace/1" alt=""></a>
                                            </div>


                                            <div style="width: 40px;margin-right: 10px;margin-bottom: 10px;height: 40px; border-radius: 50%; overflow: hidden">
                                                <a href="https://juejin.cn/user/3544481221324317"><img style="width: 40px;" src="https://sf6-ttcdn-tos.pstatp.com/img/user-avatar/64c9236807543eef6a982a65e8d7e582~300x300.image" alt=""></a>
                                            </div>


                                            <div style="width: 40px;margin-right: 10px;margin-bottom: 10px;height: 40px; border-radius: 50%; overflow: hidden">
                                                <a href="https://juejin.cn/user/2013961032040615"><img style="width: 40px;" src="https://user-gold-cdn.xitu.io/2018/7/31/164f0f7fe4437ba1?imageView2/1/w/180/h/180/q/85/format/webp/interlace/1" alt=""></a>
                                            </div>

                                            <div style="width: 40px;margin-right: 10px;margin-bottom: 10px;height: 40px; border-radius: 50%; overflow: hidden">
                                                <a href="https://juejin.cn/user/114004941107752"><img style="width: 40px;" src="https://sf6-ttcdn-tos.pstatp.com/img/user-avatar/037eb2176e5cf689a71fdccb0fd6fdf1~300x300.image" alt=""></a>
                                            </div>

                                            <div style="width: 40px;margin-right: 10px;margin-bottom: 10px;height: 40px; border-radius: 50%; overflow: hidden">
                                                <a href="https://juejin.cn/user/4292917964312062"><img style="width: 40px;" src="https://sf1-ttcdn-tos.pstatp.com/img/user-avatar/4bfa51dc82985258a3b6e08bdfcd1bef~300x300.image" alt=""></a>
                                            </div>

                                            <div style="width: 40px;margin-right: 10px;margin-bottom: 10px;height: 40px; border-radius: 50%; overflow: hidden">
                                                <a href="https://juejin.cn/user/2990280511857416"><img style="width: 40px;" src="https://sf6-ttcdn-tos.pstatp.com/img/user-avatar/2f8e59d23d70a34255963167bd6cea4a~300x300.image" alt=""></a>
                                            </div>

                                            <div style="width: 40px;margin-right: 10px;margin-bottom: 10px;height: 40px; border-radius: 50%; overflow: hidden">
                                                <a href="https://juejin.cn/user/606586151383117"><img style="width: 40px;" src="https://sf3-ttcdn-tos.pstatp.com/img/user-avatar/74c42d37504a2e5abca381a4c92f8f96~300x300.image" alt=""></a>
                                            </div>

                                            <div style="width: 40px;margin-right: 10px;margin-bottom: 10px;height: 40px; border-radius: 50%; overflow: hidden">
                                                <a href="https://juejin.cn/user/2277843824819709"><img style="width: 40px;" src="https://mirror-gold-cdn.xitu.io/16c02c8c41683222dec?imageView2/1/w/180/h/180/q/85/format/webp/interlace/1" alt=""></a>
                                            </div>

                                            <div style="width: 40px;margin-right: 10px;margin-bottom: 10px;height: 40px; border-radius: 50%; overflow: hidden">
                                                <a href="https://juejin.cn/user/3245414056213448"><img style="width: 40px;" src="https://sf3-ttcdn-tos.pstatp.com/img/user-avatar/58c0901a6eb542163c4c71b93f925603~300x300.image" alt=""></a>
                                            </div>

                                            <div style="width: 40px;margin-right: 10px;margin-bottom: 10px;height: 40px; border-radius: 50%; overflow: hidden">
                                                <a href="https://juejin.cn/user/2568098310534888"><img style="width: 40px;" src="https://sf1-ttcdn-tos.pstatp.com/img/user-avatar/c224ef3215196699cf0d814581f2377e~300x300.image" alt=""></a>
                                            </div>

                                            <div style="width: 40px;margin-right: 10px;margin-bottom: 10px;height: 40px; border-radius: 50%; overflow: hidden">
                                                <a href="https://juejin.cn/user/3491704662669469"><img style="width: 40px;" src="https://sf6-ttcdn-tos.pstatp.com/img/user-avatar/a792f784efbff7df088b0d6b572c3645~300x300.image" alt=""></a>
                                            </div>

                                            <div style="width: 40px;margin-right: 10px;margin-bottom: 10px;height: 40px; border-radius: 50%; overflow: hidden">
                                                <a href="https://juejin.cn/user/4152173075103960"><img style="width: 40px;" src="https://sf1-ttcdn-tos.pstatp.com/img/user-avatar/c40d73eaa3b61c1f3fc1df424fa3a8aa~300x300.image" alt=""></a>
                                            </div>

                                            <div style="width: 40px;margin-right: 10px;margin-bottom: 10px;height: 40px; border-radius: 50%; overflow: hidden">
                                                <a href="https://juejin.cn/user/3060687615302941"><img style="width: 40px;" src="https://sf6-ttcdn-tos.pstatp.com/img/user-avatar/b6802eed85e2b65f813d9a87d2066b73~300x300.image" alt=""></a>
                                            </div>


                                        </div>
                                        <!--END_SECTION:top-followers-->

                                    </article>
                                </div>
                            </div>


                            <div class="mt-4">

                                <div class="js-pinned-items-reorder-container">
                                    <h2 class="f4 mb-2 text-normal">
                                        Popular repositories
                                        <svg style="box-sizing: content-box; color: var(--color-icon-primary);"
                                             viewBox="0 0 16 16" fill="none" width="16" height="16"
                                             class="spinner pinned-items-spinner js-pinned-items-spinner v-align-text-bottom ml-1">
                                            <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-opacity="0.25"
                                                    stroke-width="2" vector-effect="non-scaling-stroke"/>
                                            <path d="M15 8a7.002 7.002 0 00-7-7" stroke="currentColor" stroke-width="2"
                                                  stroke-linecap="round" vector-effect="non-scaling-stroke">
                                                <animateTransform attributeName="transform" type="rotate" from="0 8 8"
                                                                  to="360 8 8" dur="1s" repeatCount="indefinite"/>
                                            </path>
                                        </svg>
                                        <span class="ml-2 color-text-secondary f6 js-pinned-items-reorder-message"
                                              role="status" aria-live="polite"
                                              data-error-text="Something went wrong."
                                              data-success-text="Order updated."></span>
                                    </h2>


                                    <ol class="d-flex flex-wrap list-style-none gutter-condensed mb-4">
                                        <li class="col-12 col-md-6 col-lg-6 mb-3 d-flex flex-content-stretch">
                                            <div class="Box pinned-item-list-item d-flex p-3 width-full public source">
                                                <div class="pinned-item-list-item-content">
                                                    <div class="d-flex width-full flex-items-center position-relative">
                                                        <a href="https://github.com/likaia/chat-system"
                                                           class="text-bold flex-auto min-width-0">
                                                            <span class="repo" title="chat-system">chat-system</span>
                                                        </a>

                                                    </div>


                                                    <p class="pinned-item-desc color-text-secondary text-small d-block mt-2 mb-3">
                                                        本项目是一个在线聊天系统，最大程度的还原了Mac客户端QQ。
                                                    </p>

                                                    <p class="mb-0 f6 color-text-secondary">
              <span class="d-inline-block mr-3">
  <span class="repo-language-color" style="background-color: #2c3e50"></span>
  <span itemprop="programmingLanguage">Vue</span>
</span>

                                                        <a href="https://github.com/likaia/chat-system/stargazers"
                                                           class="pinned-item-meta Link--muted ">
                                                            <svg aria-label="stars" class="octicon octicon-star"
                                                                 viewBox="0 0 16 16" version="1.1" width="16"
                                                                 height="16" role="img">
                                                                <path fill-rule="evenodd"
                                                                      d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
                                                            </svg>
                                                            290
                                                        </a>
                                                        <a href="https://github.com/likaia/chat-system/network/members"
                                                           class="pinned-item-meta Link--muted ">
                                                            <svg aria-label="forks" class="octicon octicon-repo-forked"
                                                                 viewBox="0 0 16 16" version="1.1" width="16"
                                                                 height="16" role="img">
                                                                <path fill-rule="evenodd"
                                                                      d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
                                                            </svg>
                                                            94
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="col-12 col-md-6 col-lg-6 mb-3 d-flex flex-content-stretch">
                                            <div class="Box pinned-item-list-item d-flex p-3 width-full public source">
                                                <div class="pinned-item-list-item-content">
                                                    <div class="d-flex width-full flex-items-center position-relative">
                                                        <a href="https://github.com/likaia/screen-shot"
                                                           class="text-bold flex-auto min-width-0">
                                                            <span class="repo" title="screen-shot">screen-shot</span>
                                                        </a>

                                                    </div>


                                                    <p class="pinned-item-desc color-text-secondary text-small d-block mt-2 mb-3">
                                                        web端自定义截屏插件
                                                    </p>

                                                    <p class="mb-0 f6 color-text-secondary">
              <span class="d-inline-block mr-3">
  <span class="repo-language-color" style="background-color: #2b7489"></span>
  <span itemprop="programmingLanguage">TypeScript</span>
</span>

                                                        <a href="https://github.com/likaia/screen-shot/stargazers"
                                                           class="pinned-item-meta Link--muted ">
                                                            <svg aria-label="stars" class="octicon octicon-star"
                                                                 viewBox="0 0 16 16" version="1.1" width="16"
                                                                 height="16" role="img">
                                                                <path fill-rule="evenodd"
                                                                      d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
                                                            </svg>
                                                            152
                                                        </a>
                                                        <a href="https://github.com/likaia/screen-shot/network/members"
                                                           class="pinned-item-meta Link--muted ">
                                                            <svg aria-label="forks" class="octicon octicon-repo-forked"
                                                                 viewBox="0 0 16 16" version="1.1" width="16"
                                                                 height="16" role="img">
                                                                <path fill-rule="evenodd"
                                                                      d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
                                                            </svg>
                                                            37
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="col-12 col-md-6 col-lg-6 mb-3 d-flex flex-content-stretch">
                                            <div class="Box pinned-item-list-item d-flex p-3 width-full public source">
                                                <div class="pinned-item-list-item-content">
                                                    <div class="d-flex width-full flex-items-center position-relative">
                                                        <a href="https://github.com/likaia/js-screen-shot"
                                                           class="text-bold flex-auto min-width-0">
                                                            <span class="repo"
                                                                  title="js-screen-shot">js-screen-shot</span>
                                                        </a>

                                                    </div>


                                                    <p class="pinned-item-desc color-text-secondary text-small d-block mt-2 mb-3">
                                                        web端自定义截屏插件(原生JS版)
                                                    </p>

                                                    <p class="mb-0 f6 color-text-secondary">
              <span class="d-inline-block mr-3">
  <span class="repo-language-color" style="background-color: #2b7489"></span>
  <span itemprop="programmingLanguage">TypeScript</span>
</span>

                                                        <a href="https://github.com/likaia/js-screen-shot/stargazers"
                                                           class="pinned-item-meta Link--muted ">
                                                            <svg aria-label="stars" class="octicon octicon-star"
                                                                 viewBox="0 0 16 16" version="1.1" width="16"
                                                                 height="16" role="img">
                                                                <path fill-rule="evenodd"
                                                                      d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
                                                            </svg>
                                                            30
                                                        </a>
                                                        <a href="https://github.com/likaia/js-screen-shot/network/members"
                                                           class="pinned-item-meta Link--muted ">
                                                            <svg aria-label="forks" class="octicon octicon-repo-forked"
                                                                 viewBox="0 0 16 16" version="1.1" width="16"
                                                                 height="16" role="img">
                                                                <path fill-rule="evenodd"
                                                                      d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
                                                            </svg>
                                                            8
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="col-12 col-md-6 col-lg-6 mb-3 d-flex flex-content-stretch">
                                            <div class="Box pinned-item-list-item d-flex p-3 width-full public source">
                                                <div class="pinned-item-list-item-content">
                                                    <div class="d-flex width-full flex-items-center position-relative">
                                                        <a href="https://github.com/likaia/vue-native-websocket-vue3"
                                                           class="text-bold flex-auto min-width-0">
                                                            <span class="repo" title="vue-native-websocket-vue3">vue-native-websocket-vue3</span>
                                                        </a>

                                                    </div>


                                                    <p class="pinned-item-desc color-text-secondary text-small d-block mt-2 mb-3">
                                                        支持vue3和vuex的websocket插件
                                                    </p>

                                                    <p class="mb-0 f6 color-text-secondary">
              <span class="d-inline-block mr-3">
  <span class="repo-language-color" style="background-color: #2b7489"></span>
  <span itemprop="programmingLanguage">TypeScript</span>
</span>

                                                        <a href="https://github.com/likaia/vue-native-websocket-vue3/stargazers"
                                                           class="pinned-item-meta Link--muted ">
                                                            <svg aria-label="stars" class="octicon octicon-star"
                                                                 viewBox="0 0 16 16" version="1.1" width="16"
                                                                 height="16" role="img">
                                                                <path fill-rule="evenodd"
                                                                      d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
                                                            </svg>
                                                            27
                                                        </a>
                                                        <a href="https://github.com/likaia/vue-native-websocket-vue3/network/members"
                                                           class="pinned-item-meta Link--muted ">
                                                            <svg aria-label="forks" class="octicon octicon-repo-forked"
                                                                 viewBox="0 0 16 16" version="1.1" width="16"
                                                                 height="16" role="img">
                                                                <path fill-rule="evenodd"
                                                                      d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
                                                            </svg>
                                                            3
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="col-12 col-md-6 col-lg-6 mb-3 d-flex flex-content-stretch">
                                            <div class="Box pinned-item-list-item d-flex p-3 width-full public source">
                                                <div class="pinned-item-list-item-content">
                                                    <div class="d-flex width-full flex-items-center position-relative">
                                                        <a href="https://github.com/likaia/vue-solar-lunar"
                                                           class="text-bold flex-auto min-width-0">
                                                            <span class="repo"
                                                                  title="vue-solar-lunar">vue-solar-lunar</span>
                                                        </a>

                                                    </div>


                                                    <p class="pinned-item-desc color-text-secondary text-small d-block mt-2 mb-3">
                                                        支持Vue | Vue3的公历转农历插件
                                                    </p>

                                                    <p class="mb-0 f6 color-text-secondary">
              <span class="d-inline-block mr-3">
  <span class="repo-language-color" style="background-color: #2b7489"></span>
  <span itemprop="programmingLanguage">TypeScript</span>
</span>

                                                        <a href="https://github.com/likaia/vue-solar-lunar/stargazers"
                                                           class="pinned-item-meta Link--muted ">
                                                            <svg aria-label="stars" class="octicon octicon-star"
                                                                 viewBox="0 0 16 16" version="1.1" width="16"
                                                                 height="16" role="img">
                                                                <path fill-rule="evenodd"
                                                                      d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
                                                            </svg>
                                                            8
                                                        </a>
                                                        <a href="https://github.com/likaia/vue-solar-lunar/network/members"
                                                           class="pinned-item-meta Link--muted ">
                                                            <svg aria-label="forks" class="octicon octicon-repo-forked"
                                                                 viewBox="0 0 16 16" version="1.1" width="16"
                                                                 height="16" role="img">
                                                                <path fill-rule="evenodd"
                                                                      d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
                                                            </svg>
                                                            2
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="col-12 col-md-6 col-lg-6 mb-3 d-flex flex-content-stretch">
                                            <div class="Box pinned-item-list-item d-flex p-3 width-full public source">
                                                <div class="pinned-item-list-item-content">
                                                    <div class="d-flex width-full flex-items-center position-relative">
                                                        <a href="https://github.com/likaia/tree-drag"
                                                           class="text-bold flex-auto min-width-0">
                                                            <span class="repo" title="tree-drag">tree-drag</span>
                                                        </a>

                                                    </div>


                                                    <p class="pinned-item-desc color-text-secondary text-small d-block mt-2 mb-3">
                                                        基于JQuery+JQueryUI实现的一款树形拖拽插件
                                                    </p>

                                                    <p class="mb-0 f6 color-text-secondary">
              <span class="d-inline-block mr-3">
  <span class="repo-language-color" style="background-color: #f1e05a"></span>
  <span itemprop="programmingLanguage">JavaScript</span>
</span>

                                                        <a href="https://github.com/likaia/tree-drag/stargazers"
                                                           class="pinned-item-meta Link--muted ">
                                                            <svg aria-label="stars" class="octicon octicon-star"
                                                                 viewBox="0 0 16 16" version="1.1" width="16"
                                                                 height="16" role="img">
                                                                <path fill-rule="evenodd"
                                                                      d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path>
                                                            </svg>
                                                            4
                                                        </a>
                                                        <a href="https://github.com/likaia/tree-drag/network/members"
                                                           class="pinned-item-meta Link--muted ">
                                                            <svg aria-label="forks" class="octicon octicon-repo-forked"
                                                                 viewBox="0 0 16 16" version="1.1" width="16"
                                                                 height="16" role="img">
                                                                <path fill-rule="evenodd"
                                                                      d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
                                                            </svg>
                                                            2
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                    </ol>

                                </div>

                            </div>

                            <div class="mt-4 position-relative">






                            </div>


                        </div>
                    </div>
                </div>

            </div>
        </div>

    </main>
</div>



<div id="ajax-error-message" class="ajax-error-message flash flash-error" hidden>
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
        <path fill-rule="evenodd"
              d="M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z"></path>
    </svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <svg class="octicon octicon-x" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
            <path fill-rule="evenodd"
                  d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path>
        </svg>
    </button>
    You can’t perform that action at this time.
</div>

<div class="js-stale-session-flash flash flash-warn flash-banner" hidden
>
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
        <path fill-rule="evenodd"
              d="M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z"></path>
    </svg>
    <span class="js-stale-session-flash-signed-in" hidden>You signed in with another tab or window. <a
            href="">Reload</a> to refresh your session.</span>
    <span class="js-stale-session-flash-signed-out" hidden>You signed out in another tab or window. <a
            href="">Reload</a> to refresh your session.</span>
</div>
<template id="site-details-dialog">
    <details class="details-reset details-overlay details-overlay-dark lh-default color-text-primary hx_rsm" open>
        <summary role="button" aria-label="Close dialog"></summary>
        <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast hx_rsm-dialog hx_rsm-modal">
            <button class="Box-btn-octicon m-0 btn-octicon position-absolute right-0 top-0" type="button"
                    aria-label="Close dialog" data-close-dialog>
                <svg class="octicon octicon-x" viewBox="0 0 16 16" version="1.1" width="16" height="16"
                     aria-hidden="true">
                    <path fill-rule="evenodd"
                          d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path>
                </svg>
            </button>
            <div class="octocat-spinner my-6 js-details-dialog-spinner"></div>
        </details-dialog>
    </details>
</template>

<div class="Popover js-hovercard-content position-absolute" style="display: none; outline: none;" tabindex="0">
    <div class="Popover-message Popover-message--bottom-left Popover-message--large Box color-shadow-large"
         style="width:360px;">
    </div>
</div>


</body>
</html>
