import data from "./task.js";
const main = document.querySelector(".exploration-parent");

const assets = data.tasks[0].assets;
console.log(assets);

const component = (e) => {
  main.innerHTML = `<section class="exploration1">
    <div class="management-description">
      <div class="management-content">
        <!-- <div class="role-description-wrapper">
          <div class="role-description"> -->
        <h1 class="technical-project-management2">
          Technical Project Management
        </h1>
        <div class="board-screenshot">
          <div class="board-screenshot-child"></div>
          <div class="journey-board-name">
            <div class="journey-board">Journey Board</div>
          </div>
          <img
            class="screenshot-from-2024-06-19-11-1"
            alt=""
            src="./arrow.png"
          />
        </div>
        <!-- </div>
        </div> -->
        <button class="component-581">
          <div class="component-58-item"></div>
          <div class="submit-task1">Submit task</div>
        </button>
      </div>
      <div class="world-exploration">
        <div class="rectangle-parent14">
          <div class="frame-child32"></div>
          <h2 class="explore-the-world1">
            Explore the world of management
          </h2>
          <div class="as-a-project1">
            As a project manager, you play an important reole in leading a
            project through initiation, planning, execution, monitoring,
            controlling and completion. How? Do you want to manage each
            and every step of your life?
          </div>
        </div>
        <div class="management-breakdown">
          <div class="threadbuild-content-parent">
            <div class="threadbuild-content">
              <div class="threadbuild-content-child"></div>
              <div class="thread-info">
                <div class="thread-info-child"></div>
                <div class="technical-project-management3">
                  ${assets[0].asset_title}
                </div>
                <div class="icon-pair">
                  <div class="thread-icon1"></div>
                  <div class="i5">i</div>
                </div>
              </div>
              <div class="thread-description">
                <div class="description-story-of-container1">
                  <span class="description4">Description</span>
                  <span class="span8">
                    <span>:</span>
                  </span>
                  <span class="story-of-alignment-scope-of-ag1">
                    <span class="span9"> </span>
                    <span
                      >${assets[0].asset_description}</span
                    >
                  </span>
                </div>
              </div>
              <img
                class="image-13-icon1"
                loading="lazy"
                alt=""
                src="image 13.png"
              />

              <div class="exploration-details">
                <div class="explore-collapse-one">1</div>
                <div class="explore-the-world-container">
                  <ul class="explore-the-world-of-managemen">
                    <li>Explore the world of management</li>
                  </ul>
                </div>
                <div class="technical-project-management-container">
                  <ul class="technical-project-management4">
                    <li class="technical-project-management5">
                      Technical Project Management
                    </li>
                    <li class="threadbuild1">Threadbuild</li>
                    <li class="structure-your-pointers1">
                      Structure your pointers
                    </li>
                    <li>4SA Method</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="threadbuild-content1">
              <div class="threadbuild-content-item"></div>
              <div class="rectangle-parent15">
                <div class="frame-child33"></div>
                <div class="threadbuild2"> ${assets[1].asset_title}</div>
                <div class="ellipse-parent6">
                  <div class="frame-child34"></div>
                  <div class="i6">i</div>
                </div>
              </div>
              <div class="rectangle-parent16">
                <div class="frame-child35"></div>
                <div class="description-watch-the-container1">
                  <span class="description5">Description</span>
                  <span class="span10">
                    <span>:</span>
                  </span>
                  <span class="watch-the-video-and-threadbuil1">
                    <span class="span11"> </span>
                    <span
                      > ${assets[1].asset_description}o</span
                    >
                  </span>
                </div>
              </div>
              <div class="threadbuild-content-inner">
                <div class="rectangle-parent17">
                  <div class="frame-child36"></div>
                  <div class="vector-container">
                    <!-- <img
                      class="vector-icon5"
                      alt=""
                      src="./public/vector-1.svg"
                    /> -->
                  </div>
                  <b class="thread-a2">Thread A</b>
                </div>
              </div>
              <div class="threadbuild-content-inner1">
                <div class="world-exploration-content-parent">
                  <div class="world-exploration-content">
                    <div class="subthread-navigation">
                      <div class="subthread-options">
                        <div class="bg-layer-group">
                          <div class="bg-layer7">
                            <div class="bg-layer8"></div>
                          </div>
                          <input
                            class="enter-text-here2"
                            placeholder="Enter Text here"
                            type="text"
                          />
                        </div>
                        <div class="subthread-type">
                          <div class="bg-layer9"></div>
                          <input
                            class="sub-thread-11"
                            placeholder="Sub thread 1"
                            type="text"
                          />
                        </div>
                      </div>
                      <div class="interpretation-entry">
                        <div class="interpretation-options">
                          <div class="bg-layer10"></div>
                          <div class="sub-interpretation-11">
                            Sub Interpretation 1
                          </div>
                        </div>
                        <div class="bg-layer-container">
                          <div class="bg-layer11">
                            <div class="bg-layer12"></div>
                          </div>
                          <input
                            class="enter-text-here3"
                            placeholder="Enter Text here"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="category-process">
                      <div class="category-process-inner">
                        <!-- <img
                          class="frame-child37"
                          loading="lazy"
                          alt=""
                          src="./public/group-1588.svg"
                        /> -->
                      </div>
                      <div class="rectangle-parent18">
                        <div class="frame-child38"></div>
                        <div class="select-categ1">Select Categ</div>
                        <div class="vector-frame">
                          <!-- <img
                            class="vector-icon6"
                            alt=""
                            src="./public/vector-2.svg"
                          /> -->
                        </div>
                      </div>
                      <div class="rectangle-parent19">
                        <div class="frame-child39"></div>
                        <div class="select-proces1">Select Proces</div>
                        <div class="vector-wrapper1">
                          <!-- <img
                            class="vector-icon7"
                            alt=""
                            src="./public/vector-2.svg"
                          /> -->
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="summary-component">
                    <div class="component-571">
                      <div class="component-57-item"></div>
                      <h2 class="component-icon">+</h2>
                      <div class="subthread-name1">
                        <div class="sub-thread1">Sub-thread</div>
                      </div>
                    </div>
                    <div class="summary-content1">
                      <div class="summary-title">
                        <div class="bg-layer13"></div>
                        <input
                          class="summary-for-thread1"
                          placeholder="Summary for Thread A"
                          type="text"
                        />
                      </div>
                      <textarea
                        class="summary-content-child"
                        placeholder="Enter Text Here"
                        rows="{4}"
                        cols="{21}"
                      >
                      </textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="board-content-wrapper">
      <div class="board-content">
        <div class="board-details">
          <div class="board-elements">
            <div class="board-elements-child"></div>
            <div class="notice-board">
              <div class="notice-shape"></div>
              <img
                class="x-01-icon1"
                loading="lazy"
                alt=""
                src="x-01.png"
              />

              <div class="n-o-t-i-c-e-b-o-a-r-d-container">
                <div class="n-o-t-container1">
                  <p class="n1">N</p>
                  <p class="o2">o</p>
                  <p class="t1">t</p>
                  <p class="i7">i</p>
                  <p class="c1">c</p>
                  <p class="e1">e</p>
                  <p class="blank-line1">&nbsp;</p>
                  <p class="b1">B</p>
                  <p class="o3">o</p>
                  <p class="a1">a</p>
                  <p class="r1">r</p>
                  <p class="d1">d</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="frame-section">
    <div class="pointers-container-parent">
      <div class="pointers-container">
        <div class="pointers">
          <div class="pointers-content">
            <div class="pointers-content-child"></div>
            <div class="pointers-title-container">
              <div class="pointers-title-container-child"></div>
              <div class="structure-your-pointers2">
                 ${assets[2].asset_title}
              </div>
              <div class="pointers-icons">
                <div class="pointer-icon"></div>
                <div class="i8">i</div>
              </div>
            </div>
            <div class="pointers-description-container">
              <div class="pointers-description">
                <div class="description-write-container1">
                  <span class="description6">
                    <span>Description </span>
                    <span class="span12">:</span>
                  </span>
                  <span class="write-a-300-400-word-article1">
                    <span class="span13"> </span>
                    <span
                      > ${assets[2].asset_description}
                    </span>
                  </span>
                </div>
              </div>
              <div class="rectangle-parent20">
                <div class="frame-child40"></div>
                <div class="article">
                  <input
                    class="title1"
                    placeholder="Title "
                    type="text"
                  />

                  <div class="article-title-container"></div>
                </div>
                <div class="article-content">
                  <div class="content2">Content</div>
                  <div class="see-more-button1">
                    <div class="editing-tools">
                      <div class="editing-tools-child"></div>
                      <div class="edit-container">
                        <div class="left-controls">
                          <div class="leftmost-control">
                            <div class="edit-button-container">
                              <a class="edit1">Edit</a>
                            </div>
                            <img
                              class="arrow-curve-left-down-icon1"
                              loading="lazy"
                              alt=""
                              src="arrow-curve-left-down.png"
                            />
                          </div>
                        </div>
                        <div class="middle-controls">
                          <div class="file-button-container">
                            <div class="file1">File</div>
                          </div>
                          <img
                            class="arrow-curve-left-right-icon1"
                            loading="lazy"
                            alt=""
                            src="arrow-curve-left-right.png"
                          />
                        </div>
                        <div class="right-controls">
                          <div class="format-controls-container">
                            <div class="format-controls">
                              <div class="tools3">Tools</div>
                            </div>
                            <div class="dropdown-controls">
                              <div class="dropdown-options">
                                <div class="view1">View</div>
                                <div class="insert1">Insert</div>
                                <div class="format1">Format</div>
                              </div>
                              <div class="icon-controls">
                                <div class="expand-icons-container">
                                  <div
                                    class="expand-icons-container-child"
                                  ></div>
                                  <div
                                    class="expand-icons-container-item"
                                  ></div>
                                </div>
                                <div class="dropdown-expand">
                                  <div
                                    class="dropdown-expand-button-contain"
                                  >
                                    <img
                                      class="arrow-expand-02-icon1"
                                      loading="lazy"
                                      alt=""
                                      src="arrow-expand-02.png"
                                    />

                                    <div
                                      class="dropdown-paragraph-container"
                                    >
                                      <div
                                        class="dropdown-paragraph-button"
                                      >
                                        <div
                                          class="dropdown-paragraph-button-child"
                                        ></div>
                                        <div class="paragraph1">
                                          Paragraph
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      class="dropdown-ellipsis-container"
                                    >
                                      <div class="ellipsis"></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="bottom-controls">
                        <div class="table1">Table</div>
                        <div class="help-button-container">
                          <div class="help1">Help</div>
                        </div>
                      </div>
                    </div>
                    <textarea class="editor" rows="{7}" cols="{21}">
                    </textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="pointers-content1">
            <div class="pointers-content-item"></div>
            <div class="rectangle-parent21">
              <div class="frame-child41"></div>
              <div class="sa-method1"> ${assets[3].asset_title}</div>
              <div class="frame-wrapper5">
                <div class="bulb-parent">
                  <div class="bulb"></div>
                  <div class="i9">i</div>
                </div>
              </div>
            </div>
            <div class="frame-parent8">
              <div class="description-to-explore-more-container">
                <div class="description-to-container1">
                  <span class="description7">
                    <span>Description </span>
                    <span class="span14">:</span>
                  </span>
                  <span class="to-explore-more-read-more1">
                    <span class="span15"> </span>
                    <span> ${assets[3].asset_description} </span>
                  </span>
                </div>
              </div>
              <div class="rectangle-parent22">
                <div class="frame-child42"></div>
                <div class="frame-parent9">
                  <div class="rectangle-parent23">
                    <div class="frame-child43"></div>
                    <!-- <div class="introduction-icon-container">
                      <img
                        class="book-icon"
                        alt=""
                        src="./public/vector-5.svg"
                      /> -->
                  </div>
                  <div class="introduction1">Introduction</div>
                </div>
                <div class="the-4sa-method-how-to-bring-wrapper">
                  <div class="the-4sa-method1">
                    The 4SA Method , How to bring a idea into progress ?
                  </div>
                </div>
              </div>
              <div class="see-more-wrapper">
                <div class="see-more2">See More</div>
              </div>
              <div class="strategy-development">
                <div class="strategy-question">
                  <div class="strategy-thread-container">
                    <div class="strategy-thread-container-child"></div>
                    <div class="strategy-thread">
                      <!-- <img
                          class="thread-icon2"
                          alt=""
                          src="./public/vector-5.svg"
                        /> -->
                    </div>
                    <div class="thread-a3">Thread A</div>
                  </div>
                  <div class="how-are-you-going-to-develop-y-wrapper">
                    <div class="how-are-you1">
                      How are you going to develop your stratergy ? Which
                      method are you going to use to develop a stratergy ?
                      What if the project is lengthy?
                    </div>
                  </div>
                </div>
              </div>
              <div class="example-container1">
                <div class="see-more-container-parent">
                  <div class="see-more-container2">
                    <div class="see-more3">See More</div>
                  </div>
                  <div class="example-header-parent">
                    <div class="example-header">
                      <div class="example-header-child"></div>
                      <div class="example-11">Example 1</div>
                    </div>
                    <div class="example-body">
                      <div class="you-have-a1">
                        You have a concept , How will you put into
                        progress?
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="icons-row">
      <div class="icons-container">
        <div class="icon-trio">
          <div class="icon-backgrounds"></div>
          <img
            class="question-mark-2-11"
            loading="lazy"
            alt=""
            src="Ellipse 198.png"
          />
        </div>
      </div>
      <div class="icons-container1">
        <div class="ellipse-parent7">
          <div class="frame-child44"></div>
          <img
            class="meeting-1-icon1"
            loading="lazy"
            alt=""
            src="Ellipse 199.png"
          />
        </div>
      </div>
      <div class="icons-container2">
        <div class="ellipse-parent8">
          <div class="frame-child45"></div>
          <img
            class="schedule-1-11"
            loading="lazy"
            alt=""
            src="Ellipse 200.png"
          />
        </div>
      </div>
    </div>
  </section>`;
  // console.log(main);
  // console.log(main.innerHTML);
  const explor = document.querySelector(".exploration-details");
  const board = document.querySelector(".board-screenshot");
  const arrowImg = document.querySelector(".screenshot-from-2024-06-19-11-1");
  const li = document.querySelectorAll(".technical-project-management4 li");

  arrowImg.addEventListener("click", (e) => {
    if (!arrowImg.classList.contains("arrow-img-collapse")) {
      arrowImg.classList.add("arrow-img-collapse");
      board.classList.add("board-collapse");
      explor.classList.add("explor-collapse");
    } else {
      arrowImg.classList.remove("arrow-img-collapse");
      board.classList.remove("board-collapse");
      explor.classList.remove("explor-collapse");
    }
  });
  li[0].addEventListener("click", component);
  li[1].addEventListener("click", component);
  li[2].addEventListener("click", component);
  li[3].addEventListener("click", component);
};

component();
