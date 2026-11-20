// Personal homepage content. Edit this file when your work, links, or interests change.

      const portfolio = {
        intro: [
          {
            text: "I'm a Computer Science graduate from ",
            linkLabel: "National University – Laguna",
            href: "https://www.nu.edu.ph/nu-laguna",
            after:
              " and a software developer focused on practical web applications, database-driven systems, quality assurance, and technical support.",
          },
          {
            text: "I work with ",
            linkLabel: "Python",
            href: "https://www.python.org/",
            after: ", ",
            moreLinks: [
              { label: "PHP", href: "https://www.php.net/" },
              { label: "Laravel", href: "https://laravel.com/" },
              {
                label: "JavaScript",
                href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
              },
              { label: "MySQL", href: "https://www.mysql.com/" },
            ],
            ending: ".",
          },
          {
            text: "Previously, I was an ",
            linkLabel: "IT and Project Design Intern",
            href: "work.html",
            after:
              " at the City Government of Calamba, where I supported website planning, documentation, coordination, and technical processes.",
          },
        ],
        projects: [
          {
            title: "Facial Emotion Recognition",
            type: "Computer vision research",
            description:
              "Prepared datasets for model training and evaluation, then applied machine learning methods to analyze and classify facial expressions.",
            stack: "Python · Machine Learning · Computer Vision",
          },
          {
            title: "Student Enrollment System",
            type: "Database-driven web application",
            description:
              "Built an enrollment application for managing student information, with web functionality, database structures, and application logic.",
            stack: "Laravel · PHP · MySQL · HTML / CSS",
          },
          {
            title: "Travel Bliss",
            type: "Travel booking web application",
            description:
              "Developed travel booking functionality, user-facing interfaces, and interactive database-driven web components.",
            stack: "PHP · MySQL · JavaScript · HTML / CSS",
          },
          {
            title: "E-Library Web Application",
            type: "Digital library application",
            description:
              "Developed an application for browsing and managing e-book information using Laravel, MySQL, and database operations.",
            stack: "Laravel · PHP · MySQL · HTML / CSS",
          },
        ],
        workExperience: {
          introduction: "Places I’ve worked, supported, and learned from.",
          organization: "City Government of Calamba",
          dates: "Dec 2025 – Feb 2026",
          role: "IT and Project Design Intern",
          description:
            "Supported website planning, project documentation, coordination, and day-to-day technical processes for the City Government of Calamba.",
          extendedDescription:
            "The internship involved supporting website planning, documentation, coordination, and technical processes within the City Government of Calamba.",
          metadata: [
            "website planning",
            "documentation",
            "coordination",
            "technical support",
          ],
        },
        workImages: [
          {
            src: "assets/images/intern2.jpg",
            alt: "Attendees seated around a conference table.",
          },
          {
            src: "assets/images/intern3.jpg",
            alt: "Two people seated at a computer workstation in an office.",
          },
          {
            src: "assets/images/intern5.jpeg",
            alt: "A group of runners in yellow jerseys at an outdoor event.",
          },
          {
            src: "assets/images/intern6.jpeg",
            alt: "A group of runners in blue jerseys at an outdoor event.",
          },
          {
            src: "assets/images/intern4.jpg",
            alt: "A laptop displaying a software development workspace.",
          },
        ],
        watchHistory: [
          {
            title: "Fast Five",
            year: 2012,
          },
          {
            title: "The Hunger Games: Sunrise on the Reaping",
            year: 2026,
          },
          {
            title: "Hungergames: Mockingjay Part 2",
            year: 2015,
          },
          {
            title: "People we meet on vacation",
            year: 2026,
          },
          {
            title: "How to lose a guy in 10 days",
            year: 2003,
          },
          {
            title: "The Hobbit - An Unexpected Journey",
            year: 2012,
          },
        ],
        personalImages: [
          {
            src: "assets/images/hkt.jpg",
            alt: "A city or street scene captured in everyday life.",
          },
          {
            src: "assets/images/vball.jpg",
            alt: "A candid photo showing a recreational group activity.",
          },
          {
            src: "assets/images/team.jpg",
            alt: "A photo of a group of people together.",
          },
          {
            src: "assets/images/rs.jpeg",
            alt: "A close-up portrait in a relaxed setting.",
          },
          {
            src: "assets/images/river.jpg",
            alt: "A scenic landscape photo with a river and natural surroundings.",
          },
          {
            src: "assets/images/peak2.jpg",
            alt: "A mountain landscape image with wider outdoor scenery.",
          },
          {
            src: "assets/images/peak.jpg",
            alt: "A highland photo showing open terrain and a scenic outdoors setting.",
          },
          {
            src: "assets/images/hkdl.jpg",
            alt: "A casual image that fits a personal photo journal.",
          },
        ],
        social: [
          { label: "GitHub", href: "https://github.com/Ronwell-bot" },
          {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/ronwell-carcer-b3aa28269/",
          },
          { label: "Email", href: "mailto:carcerronwell@gmail.com" },
          { label: "Resume", href: "assets/documents/resume.pdf" },
        ],
        contact: [
          {
            label: "Email",
            value: "carcerronwell@gmail.com",
            href: "mailto:carcerronwell@gmail.com",
          },
          {
            label: "GitHub",
            value: "github.com/Ronwell-bot",
            href: "https://github.com/Ronwell-bot",
          },
          {
            label: "LinkedIn",
            value: "linkedin.com/in/ronwell-carcer",
            href: "https://www.linkedin.com/in/ronwell-carcer-b3aa28269/",
          },
        ],
      };

      const createElement = (tag, className, text) => {
        const element = document.createElement(tag);
        if (className) element.className = className;
        if (text) element.textContent = text;
        return element;
      };

      const appendLink = (parent, label, href) => {
        const link = createElement("a", "", label);
        link.href = href;
        parent.append(link);
        return link;
      };

      const intro = document.querySelector("#intro-copy");
      if (intro) {
        portfolio.intro.forEach((item) => {
          const paragraph = createElement("p");
          paragraph.append(document.createTextNode(item.text));
          appendLink(paragraph, item.linkLabel, item.href);
          paragraph.append(document.createTextNode(item.after));
          item.moreLinks?.forEach((link, index) => {
            if (index > 0) paragraph.append(document.createTextNode(", "));
            appendLink(paragraph, link.label, link.href);
          });
          if (item.ending) paragraph.append(document.createTextNode(item.ending));
          intro.append(paragraph);
        });
      }

      const socialLinks = document.querySelector("#social-links");
      if (socialLinks) {
        portfolio.social.forEach((item) => {
          const link = appendLink(socialLinks, item.label, item.href);
          if (item.href.startsWith("http")) {
            link.target = "_blank";
            link.rel = "noreferrer";
          }
        });
      }

      const workIntro = document.querySelector("#work-intro-copy");
      const workExperienceList = document.querySelector("#work-experience");
      if (workIntro && workExperienceList) {
        const experience = portfolio.workExperience;
        workIntro.textContent = experience.introduction;

        const entry = createElement("article", "work-entry");
        const marker = createElement("span", "work-entry-index");
        marker.setAttribute("aria-hidden", "true");
        entry.append(marker);

        const main = createElement("div", "work-entry-main");
        main.append(
          createElement(
            "p",
            "work-entry-organization",
            experience.organization,
          ),
          createElement("h3", "work-entry-role", experience.role),
          createElement(
            "p",
            "work-entry-description",
            experience.description,
          ),
          createElement(
            "p",
            "work-entry-extended",
            experience.extendedDescription,
          ),
        );

        const metadata = createElement("div", "work-entry-tags");
        experience.metadata.forEach((item) => {
          metadata.append(createElement("span", "", item));
        });
        main.append(metadata);

        entry.append(
          main,
          createElement("p", "work-entry-dates", experience.dates),
        );

        if (portfolio.workImages.length > 0) {
          const gallery = createElement("section", "work-gallery");
          gallery.setAttribute("aria-label", "Internship work images");
          gallery.setAttribute("tabindex", "0");
          portfolio.workImages.forEach((image) => {
            const figure = createElement("figure", "work-image");
            const imageElement = document.createElement("img");
            imageElement.src = image.src;
            imageElement.alt = image.alt;
            imageElement.loading = "lazy";
            figure.append(imageElement);
            if (image.caption) {
              figure.append(createElement("figcaption", "", image.caption));
            }
            gallery.append(figure);
          });
          entry.append(gallery);
        }

        workExperienceList.append(entry);
      }

      const watchHistoryTrigger = document.querySelector(
        "[data-watch-history-trigger]",
      );
      const watchHistoryDialog = document.querySelector("#watch-history-dialog");
      const watchHistoryList = document.querySelector("#watch-history-list");
      const watchHistoryCount = document.querySelector("#watch-history-count");
      const latestWatchTitle = document.querySelector(
        "[data-latest-watch-title]",
      );
      if (
        watchHistoryTrigger &&
        watchHistoryDialog &&
        watchHistoryList &&
        watchHistoryCount &&
        latestWatchTitle
      ) {
        const latestWatch = portfolio.watchHistory[0];
        if (latestWatch) {
          latestWatchTitle.textContent =
            `${latestWatch.title} (${latestWatch.year})`;
        }
        const entryCount = portfolio.watchHistory.length;
        watchHistoryCount.textContent =
          `${String(entryCount).padStart(2, "0")} ${entryCount === 1 ? "entry" : "entries"}`;

        portfolio.watchHistory.forEach((watch, index) => {
          const item = createElement("li", "watch-history-item");
          const year = createElement(
            "time",
            "watch-history-year",
            String(watch.year),
          );
          year.dateTime = String(watch.year);
          item.append(
            createElement(
              "span",
              "watch-history-index",
              String(index + 1).padStart(2, "0"),
            ),
            createElement("span", "watch-history-name", watch.title),
            year,
          );
          watchHistoryList.append(item);
        });

        watchHistoryTrigger.addEventListener("click", () => {
          watchHistoryDialog.showModal();
        });
        document
          .querySelector("[data-watch-history-close]")
          ?.addEventListener("click", () => watchHistoryDialog.close());
        watchHistoryDialog.addEventListener("click", (event) => {
          if (event.target === watchHistoryDialog) {
            watchHistoryDialog.close();
          }
        });
      }

      const projectList = document.querySelector("#project-list");
      if (projectList) {
        portfolio.projects.forEach((project, index) => {
          const row = createElement("article", "project-row");
          row.append(
            createElement(
              "span",
              "project-index",
              String(index + 1).padStart(2, "0"),
            ),
          );
          const main = createElement("div", "project-main");
          main.append(createElement("p", "project-type", project.type));
          main.append(createElement("h3", "", project.title));
          main.append(
            createElement("p", "project-description", project.description),
          );
          row.append(main, createElement("p", "project-stack", project.stack));
          projectList.append(row);
        });
      }

      const personalGallery = document.querySelector("#personal-gallery");
      let lightboxIndex = 0;
      let lightboxVisible = false;

      const renderLightbox = () => {
        const lightbox = document.querySelector(".lightbox");
        if (!lightbox) return;

        const image = portfolio.personalImages[lightboxIndex];
        if (!image) return;

        const imageElement = lightbox.querySelector("img");
        imageElement.src = image.src;
        imageElement.alt = image.alt;
      };

      const closeLightbox = () => {
        const lightbox = document.querySelector(".lightbox");
        if (!lightbox) return;
        lightbox.classList.remove("visible");
        document.body.classList.remove("lightbox-open");
        lightboxVisible = false;
      };

      const openLightbox = (index) => {
        const lightbox = document.querySelector(".lightbox");
        if (!lightbox) return;

        lightboxIndex = index;
        renderLightbox();
        lightbox.classList.add("visible");
        document.body.classList.add("lightbox-open");
        lightboxVisible = true;
      };

      if (personalGallery) {
        portfolio.personalImages.forEach((image, index) => {
          const item = createElement("figure", "personal-photo");
          const button = createElement("button", "personal-photo-button");
          button.type = "button";
          button.setAttribute(
            "aria-label",
            `Open photo ${index + 1}: ${image.alt}`,
          );

          const img = document.createElement("img");
          img.src = image.src;
          img.alt = image.alt;
          img.loading = "lazy";
          button.append(img);

          item.append(button);
          button.addEventListener("click", () => openLightbox(index));
          personalGallery.append(item);
        });

        const lightbox = document.createElement("div");
        lightbox.className = "lightbox";
        lightbox.setAttribute("aria-hidden", "true");

        const lightboxInner = document.createElement("div");
        lightboxInner.className = "lightbox-inner";

        const prevButton = document.createElement("button");
        prevButton.type = "button";
        prevButton.className = "lightbox-button lightbox-prev";
        prevButton.setAttribute("aria-label", "Previous photo");
        prevButton.textContent = "←";

        const nextButton = document.createElement("button");
        nextButton.type = "button";
        nextButton.className = "lightbox-button lightbox-next";
        nextButton.setAttribute("aria-label", "Next photo");
        nextButton.textContent = "→";

        const closeButton = document.createElement("button");
        closeButton.type = "button";
        closeButton.className = "lightbox-close";
        closeButton.setAttribute("aria-label", "Close lightbox");
        closeButton.textContent = "×";

        const figure = document.createElement("figure");
        figure.className = "lightbox-figure";

        const lightboxImage = document.createElement("img");
        lightboxImage.alt = "";

        figure.append(lightboxImage);
        lightboxInner.append(prevButton, figure, nextButton, closeButton);
        lightbox.append(lightboxInner);
        document.body.append(lightbox);

        prevButton.addEventListener("click", () => {
          const nextIndex =
            (lightboxIndex - 1 + portfolio.personalImages.length) %
            portfolio.personalImages.length;
          openLightbox(nextIndex);
        });

        nextButton.addEventListener("click", () => {
          const nextIndex =
            (lightboxIndex + 1) % portfolio.personalImages.length;
          openLightbox(nextIndex);
        });

        closeButton.addEventListener("click", closeLightbox);

        lightbox.addEventListener("click", (event) => {
          if (event.target === lightbox) {
            closeLightbox();
          }
        });

        document.addEventListener("keydown", (event) => {
          if (!lightboxVisible) return;

          if (event.key === "Escape") {
            closeLightbox();
          }

          if (event.key === "ArrowLeft") {
            event.preventDefault();
            const prevIndex =
              (lightboxIndex - 1 + portfolio.personalImages.length) %
              portfolio.personalImages.length;
            openLightbox(prevIndex);
          }

          if (event.key === "ArrowRight") {
            event.preventDefault();
            const nextIndex = (lightboxIndex + 1) % portfolio.personalImages.length;
            openLightbox(nextIndex);
          }
        });
      }

      const contactList = document.querySelector("#contact-list");
      if (contactList) {
        portfolio.contact.forEach((item) => {
          const row = createElement("a", "contact-row");
          row.href = item.href;
          row.append(
            createElement("span", "", item.label),
            createElement("strong", "", item.value),
            createElement("span", "", "↗"),
          );
          contactList.append(row);
        });
      }

      const yearNode = document.querySelector("#year");
      if (yearNode) {
        yearNode.textContent = new Date().getFullYear();
      }

      const contributionCalendar = document.querySelector(
        "#contribution-calendar",
      );
      const contributionTotal = document.querySelector("#contributions-total");

      if (contributionCalendar && contributionTotal) {
        const year = new Date().getFullYear();
        const today = new Date();
        const todayKey = [
          today.getFullYear(),
          String(today.getMonth() + 1).padStart(2, "0"),
          String(today.getDate()).padStart(2, "0"),
        ].join("-");

        const showContributionError = (error) => {
          console.warn("Could not load GitHub contributions.", error);
          contributionTotal.textContent = "Activity unavailable";
          const message = createElement(
            "p",
            "contribution-error",
            "Couldn't load activity right now. You can still view it on GitHub.",
          );
          contributionCalendar.replaceChildren(message);
        };

        const renderContributions = (payload) => {
          const yearTotal = payload.total?.[year];
          if (
            !Array.isArray(payload.contributions) ||
            !Number.isFinite(yearTotal)
          ) {
            throw new Error("The contributions response has an invalid shape.");
          }

          const days = payload.contributions.filter(
            (day) =>
              typeof day.date === "string" &&
              day.date.startsWith(`${year}-`) &&
              day.date <= todayKey &&
              Number.isFinite(day.count) &&
              Number.isFinite(day.level),
          );
          if (days.length === 0) {
            throw new Error("The contributions response contains no current-year days.");
          }

          const startDate = new Date(Date.UTC(year, 0, 1));
          const startWeek = new Date(
            Date.UTC(year, 0, 1 - startDate.getUTCDay()),
          );
          const lastDate = new Date(`${days[days.length - 1].date}T00:00:00Z`);
          const weekCount =
            Math.floor((lastDate - startWeek) / (7 * 24 * 60 * 60 * 1000)) + 1;
          const monthLabels = document.createElement("div");
          monthLabels.className = "contribution-months";
          monthLabels.style.setProperty("--week-count", weekCount);
          monthLabels.setAttribute("aria-hidden", "true");

          const grid = document.createElement("div");
          grid.className = "contribution-grid";
          grid.style.setProperty("--week-count", weekCount);
          grid.setAttribute("role", "group");
          grid.setAttribute(
            "aria-label",
            `Daily GitHub contributions in ${year}`,
          );

          const weekdayLabels = document.createElement("div");
          weekdayLabels.className = "contribution-weekday-labels";
          weekdayLabels.setAttribute("aria-hidden", "true");
          ["", "Mon", "", "Wed", "", "Fri", ""].forEach((label) => {
            weekdayLabels.append(createElement("span", "", label));
          });

          let previousMonth = -1;
          days.forEach((day) => {
            const date = new Date(`${day.date}T00:00:00Z`);
            const weekIndex = Math.floor(
              (date - startWeek) / (7 * 24 * 60 * 60 * 1000),
            );
            const month = date.getUTCMonth();
            if (month !== previousMonth) {
              const label = createElement(
                "span",
                "",
                date.toLocaleString("en", {
                  month: "short",
                  timeZone: "UTC",
                }),
              );
              label.style.gridColumn = String(weekIndex + 1);
              monthLabels.append(label);
              previousMonth = month;
            }

            const count = day.count;
            const level = Math.min(4, Math.max(0, Math.trunc(day.level)));
            const cell = createElement("span", "contribution-day");
            cell.dataset.level = String(level);
            cell.style.gridColumn = String(weekIndex + 1);
            cell.style.gridRow = String(date.getUTCDay() + 1);
            cell.title = `${count} contribution${count === 1 ? "" : "s"} on ${day.date}`;
            cell.setAttribute("role", "img");
            cell.setAttribute("aria-label", cell.title);
            grid.append(cell);
          });

          const main = document.createElement("div");
          main.className = "contribution-calendar-main";
          main.append(monthLabels, grid);

          contributionCalendar.replaceChildren(weekdayLabels, main);
          contributionTotal.textContent = `${yearTotal.toLocaleString()} this year`;
        };

        fetch(
          `https://github-contributions-api.jogruber.de/v4/Ronwell-bot?y=${year}`,
        )
          .then((response) => {
            if (!response.ok) {
              throw new Error(
                `GitHub contributions request failed (${response.status}).`,
              );
            }
            return response.json();
          })
          .then(renderContributions)
          .catch(showContributionError);
      }

      const themes = ["paper", "signal", "grove"];
      const themeNames = { paper: "Paper", signal: "Signal", grove: "Grove" };
      const faviconPathByTheme = {
        paper: "assets/favicons/paper.png",
        signal: "assets/favicons/signal.png",
        grove: "assets/favicons/grove.png",
      };
      const themeButton = document.querySelector("[data-theme-toggle]");
      const themeFavicon = document.querySelector('link[rel="icon"]');
      const themeMeta = document.querySelector('meta[name="theme-color"]');

      const applyTheme = (theme, persist = true) => {
        const safeTheme = themes.includes(theme) ? theme : "paper";
        const currentTheme = safeTheme;
        document.body.dataset.theme = currentTheme;

        if (themeMeta) {
          themeMeta.content = getComputedStyle(document.body)
            .getPropertyValue("--background")
            .trim();
        }

        if (themeFavicon) {
          themeFavicon.href = faviconPathByTheme[currentTheme];
        }

        if (themeButton) {
          const currentIndex = themes.indexOf(currentTheme);
          const nextTheme = themes[(currentIndex + 1) % themes.length];
          themeButton.setAttribute(
            "aria-label",
            `Switch theme: ${themeNames[currentTheme]} (next: ${themeNames[nextTheme]})`,
          );
          themeButton.title = `Theme: ${themeNames[currentTheme]}`;
        }

        if (persist) {
          try {
            sessionStorage.setItem("portfolio-theme", currentTheme);
          } catch (error) {
            console.warn("Theme storage unavailable.", error);
          }
        }
      };

      const savedTheme = (() => {
        try {
          return sessionStorage.getItem("portfolio-theme");
        } catch (error) {
          return null;
        }
      })();

      applyTheme(
        savedTheme && themes.includes(savedTheme)
          ? savedTheme
          : document.body.dataset.theme || "paper",
        false,
      );

      if (themeButton) {
        themeButton.addEventListener("click", () => {
          const currentIndex = themes.indexOf(document.body.dataset.theme || "paper");
          const theme = themes[(currentIndex + 1) % themes.length];
          applyTheme(theme, true);
        });
      }