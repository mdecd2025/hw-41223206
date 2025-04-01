var tipuesearch = {"pages": [{'title': 'About', 'text': '課程名稱: 協同產品設計實習 - Collaborative Product Design Practice \n 學員作業網站:\xa0 https://mdecd2025.github.io/hw-41223206 \n 學員作業倉儲:\xa0 https://github.com/mdecd2025/hw-41223206 \n \n 課程代號: cd2025 \n Teams 線上教學: \n 以 "學號@nfu.edu.tw" 登入 \xa0 https://login.microsoftonline.com/ \xa0 Office 365 \n Teams 團隊代碼:\xa0 p5z4eku \n \n 課程評分: \n Homework (30%) - 每週至少提交兩次與課程進度有關的內容, 完成後填回自評表單 \n Exam (40%) - 建立包含操作流程影片、心得以及提供檔案下載的網頁後填回自評表單 \n Final Report (30%) - 利用網頁內容進行簡報並提交 pdf 格式書面報告, 完成後填回自評表單 \n', 'tags': '', 'url': 'About.html'}, {'title': 'repo', 'text': '', 'tags': '', 'url': 'repo.html'}, {'title': 'Tasks', 'text': 'task1 與 task2 任務目的在建立可於近端維護個人作業與協同作業的準備工作: \n task1 (自行製作可攜程式系統) \n task2 (使用 SSH 協定執行作業倉儲的推送) \n task3 與 task4 則為 HW2 的內容之一 \n task3 (使用 Solvespace 建立平面四連桿系統零組件) \n task4 (使用 Onshape 建立平面四連桿系統零組件) \n task5 與 task6 則為 HW3 的主要內容 \n task5 (Webots Tutorial 1 ~3) \n task6 (Webots Tutorial 4 ~6) \n', 'tags': '', 'url': 'Tasks.html'}, {'title': 'task1', 'text': '練習如何利用舊版 Python 配置新版 Python 的可攜程式 \n', 'tags': '', 'url': 'task1.html'}, {'title': 'list', 'text': '\n g3 結果 \n from browser import html, document, ajax\n\n# 目標 URL\nurl = "https://mde.tw/list/2b.txt"\n\n# G3 組員學號清單\ng3_members = {"41223206", "41223226", "41223227", "41223228", "41223235", "41223215"}\n\n# 定義回呼函式來處理資料\ndef on_complete(req):\n    if req.status == 200:\n        data = req.text.splitlines()  # 以換行分割成數列\n        all_stud = [line.strip() for line in data[1:] if line.strip()]  # 移除空白並排除空行\n\n        # 取得網頁上的 div 來顯示內容\n        brython_div1 = document["brython_div1"]\n\n        # 過濾 G3 組員\n        g3_list = []\n        for student in all_stud:\n            parts = student.split()  # 用空白分割\n            if len(parts) == 2:\n                student_id, student_account = parts\n                if student_id in g3_members:\n                    g3_list.append((student_id, student_account))\n\n        # 顯示組員數量\n        brython_div1 <= f"G3 組別 - 組員共 {len(g3_list)} 名"\n        brython_div1 <= html.BR() * 2\n\n        # 逐行顯示 G3 組員\n        for student_id, student_account in g3_list:\n            # 學號超連結\n            student_id_link = html.A(student_id, href=f"https://mdecd2025.github.io/hw-{student_account}", target="_blank")\n\n            # 帳號超連結\n            github_link = html.A(student_account, href=f"https://github.com/mdecd2025/hw-{student_account}", target="_blank")\n\n            # 插入內容\n            brython_div1 <= student_id_link + " : " + github_link\n            brython_div1 <= html.BR()\n\n# 發送 AJAX 請求\najax.get(url, oncomplete=on_complete) \n \n', 'tags': '', 'url': 'list.html'}, {'title': 'task2', 'text': '任務一 使用chat gpt用出Ipv6名單 \n \n 任務一 \n from browser import document, html\n\n# 取得目標 div\ndiv = document["brython_div1"]\n\n# 基本 IPv6 前綴\nbase_ip = "2001:288:6004:17:fff1:cd25:0:b"\n\n# 學員編號列表\nstudent_ids = [\n    "40923137", "41023114", "41023205", "41023206", "41023210", "41023213", "41023215", "41023216", "41023218", "41023232",\n    "41023237", "41071202", "41071203", "41071204", "41223201", "41223202", "41223203", "41223205", "41223206", "41223207",\n    "41223208", "41223209", "41223210", "41223211", "41223212", "41223214", "41223215", "41223216", "41223217", "41223218",\n    "41223219", "41223220", "41223221", "41223222", "41223223", "41223224", "41223225", "41223226", "41223227", "41223228",\n    "41223229", "41223230", "41223231", "41223232", "41223233", "41223234", "41223235", "41223236", "41223237", "41223239",\n    "41223240", "41223242", "41223243", "41223244", "41223245", "41223246", "41223247", "41223248", "41223249", "41223250",\n    "41223251", "41223252", "41223253", "41271217", "41271236", "41271237"\n]\n\n# 產生連結\nfor index, student_id in enumerate(student_ids, start=1):\n    # 這裡使用序號（index）來生成 IPv6 地址的一部分\n    full_ip = f"{base_ip}{index:03d}"  # 使序號保持三位數格式\n    url = f"http://[{full_ip}]:8000"\n    \n    # 顯示序號和學號\n    text = f"{index}. 學號 {student_id}"\n    link = html.A(text, href=url, target="_blank")\n    \n    div <= link\n    div <= html.BR()  # 每個連結後換行\n \n', 'tags': '', 'url': 'task2.html'}, {'title': 'w3', 'text': '\n 未分組名單 \n # 2B 班學生 GitHub 帳號\nstudents_2B = {\n    "40923137": "a40923137",\n    "41023114": "41023114",\n    "41023205": "c-ching",\n    "41023206": "tseYU000",\n    "41023210": "junpig10",\n    "41023213": "41023213",\n    "41023215": "41023215",\n    "41023216": "41023216",\n    "41023218": "snowfall-killer",\n    "41023232": "YUN4",\n    "41023237": "www000123",\n    "41071202": "41071202",\n    "41071203": "41071203",\n    "41071204": "41071204",\n    "41223201": "41223201",\n    "41223202": "41223202",\n    "41223203": "41223203",\n    "41223205": "41223205",\n    "41223206": "41223206",\n    "41223207": "emma0312",\n    "41223208": "41223208-hw",\n    "41223209": "41223209",\n    "41223210": "",\n    "41223211": "41223211",\n    "41223212": "jjjay41223212",\n    "41223214": "",\n    "41223215": "RAY41223215",\n    "41223216": "41223216",\n    "41223217": "41223217",\n    "41223218": "41223218",\n    "41223219": "41223219",\n    "41223220": "ljg41223220",\n    "41223221": "leeshaowei0716",\n    "41223222": "41223222",\n    "41223223": "linryan23",\n    "41223224": "41223224",\n    "41223225": "41223225",\n    "41223226": "41223226-0",\n    "41223227": "41223227",\n    "41223228": "hyy41223228",\n    "41223229": "41223229",\n    "41223230": "41223230",\n    "41223231": "41223231",\n    "41223232": "41223232",\n    "41223233": "41223233even",\n    "41223234": "41223234",\n    "41223235": "41223235",\n    "41223236": "41223236",\n    "41223237": "Cloud41223237",\n    "41223239": "WeihHuang",\n    "41223240": "ych0227",\n    "41223242": "41223242",\n    "41223243": "41223243",\n    "41223244": "Liu41223244",\n    "41223245": "41223245",\n    "41223246": "41223246",\n    "41223247": "CYC41223247",\n    "41223248": "41223248",\n    "41223249": "41223249",\n    "41223250": "timluo123",\n    "41223251": "41223251",\n    "41223252": "supowen",\n    "41223253": "jacky93111",\n    "41271217": "",\n    "41271236": "41271236",\n    "41271237": "41271237",\n}\n\n# 已分組的 GitHub 帳號\nb_all_members = {\n    "41223251", "41223211", "41223245", "41223243", "jjjay41223212",\n    "leeshaowei0716", "41223234", "41223209", "41223205", "41223201",\n    "41223202", "41223208-hw", "41223216", "41223217", "41223248",\n    "emma0312", "41223242", "41223203", "41223144", "41223235",\n    "RAY41223215", "hyy41223228", "41223227", "41223206", "41223226-0",\n    "Cloud41223237", "Yujenchuang", "41223225", "ljg41223220", "supowen",\n    "jacky93111", "41223246", "Liu41223244", "41223236", "41223219",\n    "41271237", "41223249", "41223229", "41223224", "41223222",\n    "41223231", "linryan23", "41023114", "41223230", "timluo123",\n    "CYC41223247", "41223218", "ych0227", "41023215", "41023216",\n    "41023213", "41071203", "41071204", "41071202", "c-ching",\n    "YUN4", "tseYU000", "snowfall-killer", "junpig10"\n}\n\n# 找出未分組學生\nungrouped_students = [\n    (stud_num, github_id) for stud_num, github_id in students_2B.items()\n    if github_id and github_id not in b_all_members\n]\n\n# 列出未分組學生\nprint("\\n== 📌 未分組學生名單 ==")\nfor stud_num, github_id in ungrouped_students:\n    print(f"學號: {stud_num}, GitHub 帳號: {github_id}")\n \n', 'tags': '', 'url': 'w3.html'}, {'title': 'task3', 'text': '', 'tags': '', 'url': 'task3.html'}, {'title': 'task4', 'text': '', 'tags': '', 'url': 'task4.html'}, {'title': 'task5', 'text': '', 'tags': '', 'url': 'task5.html'}, {'title': 'task6', 'text': '', 'tags': '', 'url': 'task6.html'}, {'title': 'Homework', 'text': '作業 (30%) \n HW1 (5%):  建立由 Box 組成的平面四連桿機構 Webots 模擬場景 \n part1: \n 請各學員在 USB 隨身碟或個人電腦上完成 cd2025 課程所需的可攜系統配置: \n 下載  portable_wcm2025.7z  (330MB, 解開壓縮後 1.4GB) \n Webots_2025a.7z  (1.5 GB, 解開後約為 2.9GB, 可單獨運作) \n Webots_2025a_web.7z  (171 MB, 解開壓縮後約為 1GB, 必須連網運作) \n Blender4.2.7z \n part2: \n 請各學員完成可攜程式系統配置後, 利用 Webots R2025a 中寬度與高度都為 0.1m 的 box 物件建立一個簡單的平面四連桿機構模擬場景. \n base (基座) 長度 1m, link1 長度 0.4m, link2 長度 0.6m, link3 長度 0.9m, 各轉軸均為 HingeJoint, joint1 旋轉速度設定為 1radian/sec. \n part3: \n 模擬場景啟動後, 按下 s 鍵機構開始作動, 按下 p 鍵後機構暫停. \n 參考資料: \n cd2025_hw1_demo.7z \n HW2 (5%):  建立由 CAD 繪製零件組成的平面四連桿機構 Webots 模擬場景 \n 各學員請利用 CAD 系統依據 HW1 的連桿尺寸與運動方式, 配置適當大小的旋轉軸以及基座後, 利用 Webots R2025a 完成一個簡單的平面四連桿機構模擬場景. \n 參考資料: \n fourbar_slvs.7z \n HW3 (20%): 建立 Webots 桌上籃球遊戲機模擬系統 \n 請各分組利用CAD 系統建立一個能在電腦桌 (1600W X 700D X 740H mm) 上運作的投籃機構 ( 參考影片 )後, 導入 Webots R2025a 套件, 建立一個能由使用者透過鍵盤按鍵操作, 且具備計分板的籃球遊戲機模擬系統. \n 參考資料: \n 參考資料: \n fourbar_ball_throwing_linkage.slvs \n sixbar_ball_throwing_linkage.slvs \n', 'tags': '', 'url': 'Homework.html'}, {'title': 'HW1', 'text': 'HW1 (5%):  建立由 Box 組成的平面四連桿機構 Webots 模擬場景 \n 操作影片標題: 國立虎尾科技大學 - 機械設計工程系 - cd2025 HW1 - 學員學號 \n 利用fourbar_slvs資料夾內零件，繪製link 1 \n \n 利用fourbar_slvs資料夾內零件，繪製link 2 \n \n 利用fourbar_slvs資料夾內零件，繪製link 3 \n \n 利用fourbar_slvs資料夾內零件，繪製base-1 \n \n 利用fourbar_slvs資料夾內零件，繪製bfourbar_linkage_design-1 \n \n 利用fourbar_slvs資料夾內零件，繪製shaft-1 \n \n 利用fourbar_slvs資料夾內零件，繪製shaft-2 \n \n \n \n \n \n', 'tags': '', 'url': 'HW1.html'}, {'title': 'HW2', 'text': 'HW2 (5%):  建立由 CAD 繪製零件組成的平面四連桿機構 Webots 模擬場景 \n 操作影片標題: 國立虎尾科技大學 - 機械設計工程系 - cd2025 HW2 - 學員學號 \n \n', 'tags': '', 'url': 'HW2.html'}, {'title': 'HW3', 'text': 'HW3 (20%): 建立 Webots 桌上籃球遊戲機模擬系統 \n 操作影片標題: 國立虎尾科技大學 - 機械設計工程系 - cd2025 HW3 - 學員學號 \n \n', 'tags': '', 'url': 'HW3.html'}, {'title': 'Midterm', 'text': '本課程所繳交的期中成績為學員自評之學習期望成績. \n 期中考週的自評期望成績繳交流程: \n \n 整理先前所完成的各週的進度、作業網頁內容以及心得 \n 拍攝期中自評影片, 上傳至 Youtube 後, 以" 國立虎尾科技大學 - 機械設計工程系 - cd2025 期中自評- 學員學號 "為影片標題後嵌入本頁面中 \n 回填期中自評表單 \n 上傳學員期中成績 \n \n 各週進度: \n 各週網頁內容: \n 期中心得: \n 期中自評影片: \n \n \n', 'tags': '', 'url': 'Midterm.html'}, {'title': 'Exam', 'text': 'Exam1 (10%): 建立 Webots 基本物件模擬場景 \n 各學員利用 Webots R2025a 套件中的 Shape 物件, 隨堂建立指定的機電系統模擬場景, 並利用 Python 程式進行互動控制. \n Exam2 (10%): 利用 CAD 零組件建立模擬場景\xa0 \n 各學員利用 CAD (Solvespace 與 NX2312), 隨堂建立指定的系統模型零組件後, 導入 Webots R2025a 後, 建立機電系統模擬場景, 並利用 Python 程式進行互動控制. \n Exam3 (20%): Webots 機電模擬場景的協同設計 \n 各分組利用 CAD (Solvespace 與 NX2312), 隨堂建立指定的系統模型零組件後, 導入 Webots R2025a 後, 建立機電系統模擬場景, 並利用 Python 程式進行互動控制. 過程中各學員必須採同步協同模式, 維護從 Github Classroom 取得的分組協同倉儲以及網站. \n 協同分組方式: \n \n 分配學員負責利用 Solvespace 建立系統零組件, 過程中必須將所建構之零組件檔案與繪圖過程影片上傳至分組網頁. \n 分配學員負責利用 NX2312 建立系統零組件, 過程中必須將所建構之零組件檔案與繪圖過程影片上傳至分組網頁. \n 分配學員負責利用 Webots 建立機電系統模擬場景, 並利用 Python 程式進行控制, 過程中必須將建構過程拍成帶有說明字幕的影片上傳至分組網頁. \n \n', 'tags': '', 'url': 'Exam.html'}, {'title': 'Exam1', 'text': 'Exam1 (10%): 建立 Webots 基本物件模擬場景 \n 操作影片標題: 國立虎尾科技大學 - 機械設計工程系 - cd2025 Exam1 - 學員學號 \n', 'tags': '', 'url': 'Exam1.html'}, {'title': 'Exam2', 'text': 'Exam2 (10%): 利用 CAD 零組件建立模擬場景 \n 操作影片標題: 國立虎尾科技大學 - 機械設計工程系 - cd2025 Exam2 - 學員學號 \n', 'tags': '', 'url': 'Exam2.html'}, {'title': 'Exam3', 'text': 'Exam3 (20%): Webots 機電模擬場景的協同設計 \n 操作影片標題: 國立虎尾科技大學 - 機械設計工程系 - cd2025 Exam3 - 學員學號 \n', 'tags': '', 'url': 'Exam3.html'}, {'title': 'Final', 'text': '期末協同專案執行過程影片、簡報與 PDf 報告檔案 (六人一組) (30%) \n 題目:  Webots 動態投籃模擬系統的協同設計 \n 說明:  \n 籃框架被配置在一定範圍內, 可隨機慢速前進、後退及左右擺動, 投籃機構系統帶有一定數量的籃球, 被配置在可自由移動的輪車上. \n 操作者可利用鍵盤特定按鍵控制投籃輪車的移動並發射投籃, 每投出一球後系統透過記分板進行計分, 並由送球機構進行補球或移動輪車取球, 遊戲可進行至全部數量籃球投完為止. \n 請將期末協同專案執行過程、內容與心得, 製作成影片，配合字幕上傳至 Youtube 後嵌入各階段的期末報告頁面中. \n 影片標題:  國立虎尾科技大學 - 機械設計工程系 - cd2025 期末報告 - 學員學號 - 各階段影片主題 \n', 'tags': '', 'url': 'Final.html'}, {'title': 'Brython', 'text': '1 add to 100 \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};