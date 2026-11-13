/**
 * Famral - Common Navbar & Footer System
 * File: common.js
 * 
 * Provides centralized markup, styling, and interactive behaviors
 * for the global Navigation Bar and Footer across all Famral pages.
 */

(function () {
    'use strict';

    // 1. Common CSS Styles for Navbar & Footer
    const commonStyles = `
        /* Famral Common CSS Variables Fallback */
        :root {
            --primary-color: #0067b8;
            --primary-hover: #005da6;
            --primary-light: #eff6ff;
            --text-dark: #111827;
            --text-medium: #374151;
            --text-light: #6b7280;
            --border-color: #e5e7eb;
            --surface-color: #f8fafc;
            --surface-card: #ffffff;
        }

        /* Navbar Layout & Styling */
        .navbar {
            background: #ffffff;
            border-bottom: 2px solid var(--border-color);
            padding: 0.75rem 0;
            position: sticky;
            top: 0;
            z-index: 1000;
            width: 100%;
            box-sizing: border-box;
        }

        .nav-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 1260px;
            margin: 0 auto;
            padding: 0 1.5rem;
            width: 100%;
            box-sizing: border-box;
        }

        .nav-logo {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            font-weight: 700;
            font-size: 1.3rem;
            color: var(--text-dark);
            text-decoration: none;
            letter-spacing: -0.01em;
        }

        .nav-logo img {
            width: 32px;
            height: 32px;
            display: block;
        }

        .nav-links-wrapper {
            display: flex;
            gap: 0.35rem;
            align-items: center;
            flex-wrap: wrap;
        }

        .nav-item.dropdown {
            position: relative;
        }

        .nav-link {
            background: none;
            border: none;
            cursor: pointer;
            font-family: inherit;
            font-size: 0.92rem;
            color: var(--text-dark);
            display: inline-flex;
            align-items: center;
            gap: 0.35rem;
            padding: 0.5rem 0.8rem;
            font-weight: 500;
            border-radius: 4px;
            transition: background-color 0.15s ease, color 0.15s ease;
            height: 38px;
            white-space: nowrap;
            text-decoration: none;
            box-sizing: border-box;
        }

        .nav-link:hover,
        .nav-link.active {
            background-color: #f0f7ff;
            color: var(--primary-color);
        }

        /* Dropdown Menus */
        .dropdown-menu {
            display: none;
            position: absolute;
            top: calc(100% + 0.4rem);
            left: 0;
            background: #ffffff;
            border: 1px solid var(--border-color);
            border-radius: 8px;
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
            z-index: 1000;
            min-width: 260px;
            max-height: 480px;
            overflow-y: auto;
            animation: famralFadeIn 0.15s ease-out;
        }

        .dropdown-menu.show {
            display: block;
        }

        .dropdown-toggle .famral-icon {
            transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
            pointer-events: none;
            display: inline-block;
        }

        .dropdown-toggle[aria-expanded="true"] .famral-icon {
            transform: rotate(180deg);
        }

        .dropdown-menu a {
            display: block;
            padding: 0.65rem 1.1rem;
            font-size: 0.88rem;
            color: var(--text-medium);
            text-align: left;
            text-decoration: none;
            transition: background-color 0.12s ease, color 0.12s ease;
            border-bottom: 1px solid #f3f4f6;
        }

        .dropdown-menu a:last-child {
            border-bottom: none;
        }

        .dropdown-menu a:hover {
            background-color: #eff6ff;
            color: var(--primary-color);
        }

        @keyframes famralFadeIn {
            from {
                opacity: 0;
                transform: translateY(4px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* Mobile Hamburger Toggle */
        .nav-toggle {
            display: none;
            background: none;
            border: none;
            font-size: 1.5rem;
            color: var(--text-dark);
            cursor: pointer;
            padding: 0.5rem;
            border-radius: 6px;
            align-items: center;
            justify-content: center;
            min-width: 44px;
            min-height: 44px;
            touch-action: manipulation;
            -webkit-tap-highlight-color: transparent;
            transition: background-color 0.15s ease, color 0.15s ease;
        }

        .nav-toggle:hover,
        .nav-toggle:focus-visible {
            background-color: var(--primary-light, #eff6ff);
            color: var(--primary-color, #0067b8);
            outline: none;
        }

        .nav-toggle svg {
            pointer-events: none;
        }

        /* Footer Layout & Styling */
        .site-footer {
            background-color: #ffffff;
            border-top: 1px solid var(--border-color);
            padding: 4.5rem 0 2rem;
            margin-top: auto;
            width: 100%;
            box-sizing: border-box;
        }

        .site-footer .container {
            max-width: 1260px;
            margin: 0 auto;
            padding: 0 1.5rem;
            box-sizing: border-box;
        }

        .footer-links-grid {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 2rem;
            margin-bottom: 3rem;
        }

        .footer-links-grid h4 {
            margin-bottom: 1.1rem;
            font-size: 0.95rem;
            color: var(--text-dark);
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.03em;
        }

        .footer-links-grid ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .footer-links-grid ul li {
            margin-bottom: 0.65rem;
        }

        .footer-links-grid a {
            color: var(--text-light);
            transition: color 0.15s ease;
            font-size: 0.88rem;
            text-decoration: none;
        }

        .footer-links-grid a:hover {
            color: var(--primary-color);
            text-decoration: underline;
        }

        .footer-content {
            border-top: 1px solid var(--border-color);
            padding-top: 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 1rem;
            color: var(--text-light);
            font-size: 0.875rem;
        }

        .footer-bottom-links {
            display: flex;
            gap: 0.75rem;
            align-items: center;
            flex-wrap: wrap;
        }

        .footer-bottom-links a {
            color: var(--text-light);
            text-decoration: none;
        }

        .footer-bottom-links a:hover {
            color: var(--primary-color);
            text-decoration: underline;
        }

        .footer-bottom-links .sep {
            color: #d1d5db;
        }

        .back-to-top {
            color: var(--text-light);
            display: inline-flex;
            align-items: center;
            gap: 0.35rem;
            font-size: 0.875rem;
            text-decoration: none;
            transition: color 0.15s ease;
            cursor: pointer;
        }

        .back-to-top:hover {
            color: var(--primary-color);
        }

        /* SVG Icon Utilities */
        .famral-icon {
            width: 1em;
            height: 1em;
            vertical-align: middle;
            display: inline-block;
            fill: none;
            stroke: currentColor;
            stroke-linecap: round;
            stroke-linejoin: round;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1200px) {
            .footer-links-grid {
                grid-template-columns: repeat(3, 1fr);
                gap: 2rem;
            }
        }

        @media (max-width: 992px) {
            .footer-links-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 2rem;
            }
        }

        @media (min-width: 769px) and (max-width: 960px) {
            .nav-container {
                padding: 0 1rem;
            }
            .nav-link {
                padding: 0.45rem 0.55rem;
                font-size: 0.88rem;
                gap: 0.25rem;
            }
            .nav-links-wrapper {
                gap: 0.2rem;
            }
        }

        @media (max-width: 768px) {
            .navbar {
                padding: 0.5rem 0;
            }

            .nav-container {
                padding: 0 1rem;
            }

            .nav-toggle {
                display: inline-flex;
            }

            .nav-links-wrapper {
                display: none;
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                width: 100%;
                background: #ffffff;
                flex-direction: column;
                align-items: stretch;
                padding: 0.75rem 1rem 1.25rem;
                border-bottom: 2px solid var(--border-color);
                box-shadow: 0 14px 28px rgba(0, 0, 0, 0.12);
                gap: 0.35rem;
                max-height: calc(100vh - 65px);
                max-height: calc(100dvh - 65px);
                overflow-y: auto;
                -webkit-overflow-scrolling: touch;
                overscroll-behavior: contain;
                z-index: 1001;
                box-sizing: border-box;
            }

            .nav-links-wrapper.active {
                display: flex;
            }

            .nav-item.dropdown {
                width: 100%;
                position: relative;
            }

            .nav-link {
                width: 100%;
                height: auto !important;
                min-height: 44px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0.7rem 0.85rem;
                font-size: 0.98rem;
                border-radius: 6px;
                white-space: normal;
                touch-action: manipulation;
                -webkit-tap-highlight-color: transparent;
                box-sizing: border-box;
            }

            .dropdown-toggle {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }

            .dropdown-toggle .famral-icon {
                width: 14px;
                height: 14px;
            }

            .dropdown-toggle[aria-expanded="true"] {
                background-color: var(--primary-light, #eff6ff);
                color: var(--primary-color, #0067b8);
                font-weight: 600;
            }

            .dropdown-menu {
                position: static !important;
                top: auto;
                left: auto;
                right: auto;
                float: none;
                width: 100% !important;
                min-width: 0 !important;
                max-width: 100% !important;
                max-height: none;
                box-shadow: none;
                border: 1px solid #e2e8f0;
                background-color: #f8fafc;
                border-radius: 8px;
                padding: 0.25rem 0;
                margin: 0.35rem 0 0.5rem 0;
                box-sizing: border-box;
                overflow: hidden;
                animation: none;
            }

            .dropdown-menu.show {
                display: block !important;
            }

            .dropdown-menu a {
                display: block;
                padding: 0.7rem 1rem;
                font-size: 0.9rem;
                line-height: 1.4;
                color: var(--text-medium, #374151);
                text-align: left;
                text-decoration: none;
                border-bottom: 1px solid #edf2f7;
                white-space: normal;
                word-break: break-word;
                min-height: 42px;
                box-sizing: border-box;
                touch-action: manipulation;
                -webkit-tap-highlight-color: transparent;
            }

            .dropdown-menu a:last-child {
                border-bottom: none;
            }

            .dropdown-menu a:hover,
            .dropdown-menu a:focus-visible,
            .dropdown-menu a.active {
                background-color: #eff6ff;
                color: var(--primary-color, #0067b8);
            }
        }

        @media (max-width: 540px) {
            .footer-links-grid {
                grid-template-columns: 1fr;
                gap: 1.75rem;
            }

            .footer-content {
                flex-direction: column;
                align-items: center;
                text-align: center;
            }
        }
    `;

    // 2. Navbar HTML Template
    const navbarTemplate = `
    <nav class="navbar" aria-label="Main navigation">
        <div class="nav-container">
            <!-- Logo -->
            <a href="https://www.famral.com/" class="nav-logo">
                <img src="/favicon.png" alt="Famral Logo" width="32" height="32">
                Famral
            </a>

            <!-- Mobile Menu Toggle Button -->
            <button type="button" class="nav-toggle" aria-label="Toggle navigation" aria-expanded="false" aria-controls="navLinks">
                <svg class="famral-icon icon-bars" style="width: 24px; height: 24px;" viewBox="0 0 24 24" stroke-width="2">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
                <svg class="famral-icon icon-times" style="width: 24px; height: 24px; display: none;" viewBox="0 0 24 24" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>

            <!-- Navigation Links -->
            <div class="nav-links-wrapper" id="navLinks">
                <a href="/" class="nav-link">Home</a>

                <!-- Rank Predictor Dropdown -->
                <div class="nav-item dropdown">
                    <button type="button" class="nav-link dropdown-toggle" aria-haspopup="true" aria-expanded="false">
                        Rank Predictor
                        <svg class="famral-icon" style="width: 12px; height: 12px;" viewBox="0 0 24 24" stroke-width="2.5">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </button>
                    <div class="dropdown-menu">
                        <a href="/ap-eapcet-rank-predictor">AP EAPCET Rank Predictor</a>
                        <a href="/kcet-rank-predictor">KCET Rank Predictor</a>
                        <a href="/comedk-rank-predictor">COMEDK Rank Predictor</a>
                        <a href="/jee-main-rank-predictor">JEE Main Rank Predictor</a>
                        <a href="/jee-advanced-rank-predictor">JEE Advanced Rank Predictor</a>
                        <a href="/mht-cet-rank-predictor">MHT CET Rank Predictor</a>
                        <a href="/keam-rank-predictor">KEAM Rank Predictor</a>
                        <a href="/wbjee-rank-predictor">WBJEE Rank Predictor</a>
                        <a href="/tnea-rank-predictor">TNEA Rank Predictor</a>
                        <a href="/rank-predictor" style="font-weight: 600; color: var(--primary-color, #0067b8); background: var(--surface-color, #f8fafc);">View All Rank Predictors &rarr;</a>
                    </div>
                </div>

                <!-- Percentile Predictor Dropdown -->
                <div class="nav-item dropdown">
                    <button type="button" class="nav-link dropdown-toggle" aria-haspopup="true" aria-expanded="false">
                        Percentile Predictor
                        <svg class="famral-icon" style="width: 12px; height: 12px;" viewBox="0 0 24 24" stroke-width="2.5">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </button>
                    <div class="dropdown-menu">
                        <a href="/jee-main-percentile-predictor">JEE Main Percentile Predictor</a>
                        <a href="/mht-cet-percentile-predictor">MHT CET Percentile Predictor</a>
                        <a href="/cat-percentile-predictor">CAT Percentile Predictor</a>
                        <a href="/nmat-percentile-predictor">NMAT Percentile Predictor</a>
                        <a href="/cuet-percentile-predictor">CUET Percentile Predictor</a>
                        <a href="/percentile-predictor" style="font-weight: 600; color: var(--primary-color, #0067b8); background: var(--surface-color, #f8fafc);">View All Percentile Predictors &rarr;</a>
                    </div>
                </div>

                <!-- College Predictor Dropdown -->
                <div class="nav-item dropdown">
                    <button type="button" class="nav-link dropdown-toggle" aria-haspopup="true" aria-expanded="false">
                        College Predictor
                        <svg class="famral-icon" style="width: 12px; height: 12px;" viewBox="0 0 24 24" stroke-width="2.5">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </button>
                    <div class="dropdown-menu">
                        <a href="/tg-eapcet-college-predictor">TG EAPCET College Predictor</a>
                        <a href="/ap-eapcet-college-predictor">AP EAPCET College Predictor</a>
                        <a href="/kcet-college-predictor">KCET College Predictor</a>
                        <a href="/comedk-college-predictor">COMEDK College Predictor</a>
                        <a href="/jee-main-college-predictor">JEE Main College Predictor</a>
                        <a href="/jee-advanced-college-predictor">JEE Advanced Predictor</a>
                        <a href="/mht-cet-college-predictor">MHT CET College Predictor</a>
                        <a href="/cuet-college-predictor">CUET UG College Predictor</a>
                        <a href="/bitsat-college-predictor">BITSAT College Predictor</a>
                        <a href="/college-predictor" style="font-weight: 600; color: var(--primary-color, #0067b8); background: var(--surface-color, #f8fafc);">View All College Predictors &rarr;</a>
                    </div>
                </div>
                <a href="/exams" class="nav-link">Exams</a>
            </div>
        </div>
    </nav>
    `;

    // 3. Footer HTML Template
    const footerTemplate = `
    <footer class="site-footer">
        <div class="container">
            <div class="footer-links-grid">
                <!-- Col 1: College Predictors -->
                <div>
                    <h4>College Predictors</h4>
                    <ul>
                        <li><a href="/jee-main-college-predictor">JEE Main College Predictor</a></li>
                        <li><a href="/jee-advanced-college-predictor">JEE Advanced College Predictor</a></li>
                        <li><a href="/cuet-college-predictor">CUET UG College Predictor</a></li>
                        <li><a href="/mht-cet-college-predictor">MHT CET College Predictor</a></li>
                        <li><a href="/reap-college-predictor">REAP College Predictor</a></li>
                        <li><a href="/mp-dte-college-predictor">MP DTE College Predictor</a></li>
                        <li><a href="/comedk-college-predictor">COMEDK College Predictor</a></li>
                        <li><a href="/kcet-college-predictor">KCET College Predictor</a></li>
                        <li><a href="/tg-eapcet-college-predictor">TG EAPCET College Predictor</a></li>
                        <li><a href="/ap-eapcet-college-predictor">AP EAPCET College Predictor</a></li>
                        <li><a href="/tnea-college-predictor">TNEA College Predictor</a></li>
                        <li><a href="/wbjee-college-predictor">WBJEE College Predictor</a></li>
                        <li><a href="/uptac-college-predictor">UPTAC College Predictor</a></li>
                        <li><a href="/college-predictor" style="font-weight: 600; color: var(--primary-color, #0067b8);">View All College Predictors &rarr;</a></li>
                    </ul>
                </div>

                <!-- Col 2: Rank Predictors -->
                <div>
                    <h4>Rank Predictors</h4>
                    <ul>
                        <li><a href="/jee-main-rank-predictor">JEE Main Rank Predictor</a></li>
                        <li><a href="/jee-advanced-rank-predictor">JEE Advanced Rank Predictor</a></li>
                        <li><a href="/cuet-rank-predictor">CUET Rank Predictor</a></li>
                        <li><a href="/mht-cet-rank-predictor">MHT CET Rank Predictor</a></li>
                        <li><a href="/reap-rank-predictor">REAP Rank Predictor</a></li>
                        <li><a href="/comedk-rank-predictor">COMEDK Rank Predictor</a></li>
                        <li><a href="/keam-rank-predictor">KEAM Rank Predictor</a></li>
                        <li><a href="/wbjee-rank-predictor">WBJEE Rank Predictor</a></li>
                        <li><a href="/tnea-rank-predictor">TNEA Rank Predictor</a></li>
                        <li><a href="/tg-eapcet-rank-predictor">TG EAPCET Rank Predictor</a></li>
                        <li><a href="/ap-eapcet-rank-predictor">AP EAPCET Rank Predictor</a></li>
                        <li><a href="/rank-predictor" style="font-weight: 600; color: var(--primary-color, #0067b8);">View All Rank Predictors &rarr;</a></li>
                    </ul>
                </div>

                <!-- Col 3: Tools & Features -->
                <div>
                    <h4>Percentile Predictors</h4>
                    <ul>
                        <li><a href="/jee-main-percentile-predictor">JEE Main Percentile Predictor</a></li>
                        <li><a href="/mht-cet-percentile-predictor">MHT CET Percentile Predictor</a></li>
                        <li><a href="/cat-percentile-predictor">CAT Percentile Predictor</a></li>
                        <li><a href="/nmat-percentile-predictor">NMAT Percentile Predictor</a></li>
                        <li><a href="/cuet-percentile-predictor">CUET Percentile Predictor</a></li>
                        <li><a href="/cmat-percentile-predictor">CMAT Percentile Predictor</a></li>
                        <li><a href="/percentile-predictor" style="font-weight: 600; color: var(--primary-color, #0067b8);">View All Percentile Predictors &rarr;</a></li>
                    </ul>
                </div>

                <!-- Col 4: Colleges & Tools -->
                <div>
                    <h4>Colleges</h4>
                    <ul>
                        <li><a href="/college/rtu-kota">RTU Kota</a></li>
                        <li><a href="/college/mbm-jodhpur">MBM Jodhpur</a></li>
                        <li><a href="/college/skit-jaipur">SKIT Jaipur</a></li>
                        <li><a href="/college/ctae-udaipur">CTAE Udaipur</a></li>
                    </ul>
                    <h4 style="margin-top: 1.25rem;">SEO Tools</h4>
                    <ul>
                        <li><a href="/seo/open-graph-generator">Open Graph Generator</a></li>
                        <li><a href="/seo/meta-tag-generator">Meta Tag Generator</a></li>
                        <li><a href="/seo/schema-markup-generator">Schema Markup Generator</a></li>
                    </ul>
                </div>

                <!-- Col 5: Exams & Counselling -->
                <div>
                    <h4>Exams & Counselling</h4>
                    <ul>
                        <li><a href="/exam/jee-main">JEE Main 2027</a></li>
                        <li><a href="/exam/jee-advanced">JEE Advanced 2027</a></li>
                        <li><a href="/exam/cuet">CUET UG 2027</a></li>
                        <li><a href="/exam/viteee">VITEEE 2027</a></li>
                        <li><a href="/exam/bitsat">BITSAT 2027</a></li>
                        <li><a href="/exam/met">MET 2027</a></li>
                        <li><a href="https://jeerankpredictor.com/">JEE Rank Predictor</a></li>
                        <li><a href="https://mpdtecounselling.in/">MP DTE Counselling</a></li>
                        <li><a href="/exam/reap">REAP 2027</a></li>
                        <li><a href="/exam/uptac">UPTAC 2027</a></li>
                        <li><a href="/exam/jac-delhi">JAC Delhi 2027</a></li>
                        <li><a href="/exam/ipu-cet">IPU CET 2027</a></li>
                        <li><a href="/exam/comedk">COMEDK 2027</a></li>
                        <li><a href="/exam/kcet">KCET 2027</a></li>
                        <li><a href="/exam/keam">KEAM 2027</a></li>
                        <li><a href="/exam/tnea">TNEA 2027</a></li>
                        <li><a href="/exam/mht-cet">MHT CET 2027</a></li>
                        <li><a href="/exam/wbjee">WBJEE 2027</a></li>
                        <li><a href="/exam/gujcet">GUJCET 2027</a></li>
                        <li><a href="/exams" style="font-weight: 600; color: var(--primary-color, #0067b8);">View All Exams &rarr;</a></li>
                    </ul>
                </div>
            </div>

            <div class="footer-content">
                <p>&copy; <span id="current-year"></span> Famral. All Rights Reserved.</p>
                <div class="footer-bottom-links">
                    <a href="/about">About Us</a>
                    <span class="sep">|</span>
                    <a href="/privacy">Privacy Policy</a>
                    <span class="sep">|</span>
                    <a href="/terms">Terms &amp; Conditions</a>
                    <span class="sep">|</span>
                    <a href="/contact">Contact Us</a>
                </div>
                <p><a href="#" class="back-to-top">Back to Top <svg class="famral-icon" style="width: 14px; height: 14px;" viewBox="0 0 24 24" stroke-width="2.5"><line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline></svg></a></p>
            </div>
        </div>
    </footer>
    `;

    // 4. Inject Styles
    function injectStyles() {
        if (!document.getElementById('famral-common-styles')) {
            const style = document.createElement('style');
            style.id = 'famral-common-styles';
            style.textContent = commonStyles;
            document.head.appendChild(style);
        }
    }

    // 5. Inject or Replace Navbar
    function injectNavbar() {
        const placeholder = document.getElementById('navbar-placeholder') || document.querySelector('[data-common-navbar]');
        const existingNav = document.querySelector('nav.navbar');

        const wrapper = document.createElement('div');
        wrapper.innerHTML = navbarTemplate.trim();
        const newNav = wrapper.firstChild;

        if (placeholder) {
            placeholder.replaceWith(newNav);
        } else if (existingNav) {
            existingNav.replaceWith(newNav);
        } else {
            document.body.insertAdjacentElement('afterbegin', newNav);
        }
    }

    // 6. Inject or Replace Footer
    function injectFooter() {
        const placeholder = document.getElementById('footer-placeholder') || document.querySelector('[data-common-footer]');
        const existingFooter = document.querySelector('footer.site-footer');

        const wrapper = document.createElement('div');
        wrapper.innerHTML = footerTemplate.trim();
        const newFooter = wrapper.firstChild;

        if (placeholder) {
            placeholder.replaceWith(newFooter);
        } else if (existingFooter) {
            existingFooter.replaceWith(newFooter);
        } else {
            document.body.appendChild(newFooter);
        }
    }

    // 7. Initialize Interactive Events
    function initInteractivity() {
        // Mobile Toggle Elements
        const navToggle = document.querySelector('.nav-toggle');
        const navLinks = document.querySelector('.nav-links-wrapper');
        const iconBars = navToggle ? navToggle.querySelector('.icon-bars') : null;
        const iconTimes = navToggle ? navToggle.querySelector('.icon-times') : null;
        const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

        function setMobileNavOpen(isOpen) {
            if (!navToggle || !navLinks) return;
            navLinks.classList.toggle('active', isOpen);
            navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            if (iconBars && iconTimes) {
                iconBars.style.display = isOpen ? 'none' : 'inline-block';
                iconTimes.style.display = isOpen ? 'inline-block' : 'none';
            }
            if (!isOpen) {
                // When mobile menu closes, also close all open dropdowns
                closeAllDropdowns();
            }
        }

        function closeAllDropdowns() {
            document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
                menu.classList.remove('show');
            });
            dropdownToggles.forEach(toggle => {
                toggle.setAttribute('aria-expanded', 'false');
            });
        }

        if (navToggle && navLinks) {
            navToggle.addEventListener('click', (e) => {
                e.stopPropagation();
                const isCurrentlyActive = navLinks.classList.contains('active');
                setMobileNavOpen(!isCurrentlyActive);
            });

            // Close mobile menu on clicking any navigation link
            navLinks.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    if (navLinks.classList.contains('active')) {
                        setMobileNavOpen(false);
                    }
                });
            });
        }

        // Dropdown Menus
        dropdownToggles.forEach(toggle => {
            toggle.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                const menu = toggle.nextElementSibling;
                const isCurrentlyOpen = menu && menu.classList.contains('show');

                // Close all other dropdowns and reset their aria-expanded
                dropdownToggles.forEach(otherToggle => {
                    if (otherToggle !== toggle) {
                        otherToggle.setAttribute('aria-expanded', 'false');
                        const otherMenu = otherToggle.nextElementSibling;
                        if (otherMenu) otherMenu.classList.remove('show');
                    }
                });

                // Toggle current dropdown
                if (menu) {
                    if (isCurrentlyOpen) {
                        menu.classList.remove('show');
                        toggle.setAttribute('aria-expanded', 'false');
                    } else {
                        menu.classList.add('show');
                        toggle.setAttribute('aria-expanded', 'true');
                    }
                }
            });
        });

        // Close dropdowns & mobile menu on document click outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.nav-item.dropdown')) {
                closeAllDropdowns();
            }

            if (navLinks && navToggle && !navLinks.contains(e.target) && !navToggle.contains(e.target)) {
                if (navLinks.classList.contains('active')) {
                    setMobileNavOpen(false);
                }
            }
        });

        // Close menus on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeAllDropdowns();
                if (navLinks && navLinks.classList.contains('active')) {
                    setMobileNavOpen(false);
                }
            }
        });

        // Reset mobile menu if resized to desktop viewport
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768 && navLinks && navLinks.classList.contains('active')) {
                setMobileNavOpen(false);
            }
        });

        // Current Year
        const yearEl = document.getElementById('current-year');
        if (yearEl) {
            yearEl.textContent = new Date().getFullYear();
        }

        // Back to Top smooth scroll
        const backToTopBtn = document.querySelector('.back-to-top');
        if (backToTopBtn) {
            backToTopBtn.addEventListener('click', (e) => {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }

        // Active link highlighting
        const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
        const allNavLinks = document.querySelectorAll('.nav-links-wrapper a');
        allNavLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href && (href === currentPath || (href !== '/' && currentPath.endsWith(href)))) {
                link.classList.add('active');
                // Also highlight parent dropdown if nested
                const parentDropdown = link.closest('.nav-item.dropdown');
                if (parentDropdown) {
                    const toggleBtn = parentDropdown.querySelector('.dropdown-toggle');
                    if (toggleBtn) toggleBtn.classList.add('active');
                }
            }
        });
    }

    // 8. Bootstrap Common Components
    function init() {
        injectStyles();
        injectNavbar();
        injectFooter();
        initInteractivity();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Expose FamralCommon API on window for programmatic control if needed
    window.FamralCommon = {
        init: init,
        injectNavbar: injectNavbar,
        injectFooter: injectFooter,
        injectStyles: injectStyles
    };
})();
