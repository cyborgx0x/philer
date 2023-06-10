class Collection {
    constructor({id,name,content, cover, description}) {
      this.id = id
      this.name = name
      this.cover = cover
      this.content = content
      this.description = description
    }
    createPost(context) {
      context.style.backgroundImage = "url("+ this.cover + ")"
      
      let editbutton = document.createElement('button')
      editbutton.name = "edit"
      editbutton.value = this.id
      editbutton.addEventListener('click', (e) => {console.log(e.target);addNew(e.target)})
      editbutton.className = "btn btn-primary overlay"
      editbutton.textContent = "Edit this collection"
      context.appendChild(editbutton)
      let header = document.createElement('h2')
      header.className = "card-title overlay"
      header.textContent = this.name
      context.appendChild(header)
      let description = document.createElement('div')
      description.className = "card-body overlay"
      description.textContent = this.description
      context.appendChild(description)
      
    }
    set updateContent(newcontent){
      this.content = newcontent
    }
    set updateName(newname){
      this.name = newname
    }
    save() {
      saveToLocal(this)
    }
  }
  
  let data = [
    {
      "id": 01,
      "name": "'Ngọc nữ' Nhật Bản kết hôn",
      "description": "Aragaki Yui, từng nhiều lần thắng bình chọn \"Người tình trong mơ\" của đàn ông Nhật, kết hôn với tài tử Hoshino Gen.", 
      "content": {
        "time": 1621441570881,
        "blocks": [
            {
                "type": "paragraph",
                "data": {
                    "text": "Aragaki Yui, từng nhiều lần thắng bình chọn \"Người tình trong mơ\" của đàn ông Nhật, kết hôn với tài tử Hoshino Gen."
                }
            },
            {
                "type": "paragraph",
                "data": {
                    "text": "Ngày 19/5, trên fanpage, Aragaki Yui báo hỷ sự với fan, cảm ơn sự ủng hộ của khán giả. Cô viết: \"Tôi vào làng giải trí từ độ 10 tuổi, có được hôm nay là nhờ các bạn. Ngày báo tin kết hôn với các bạn cuối cùng đã đến nhưng thực ra, cuộc sống của tôi không khác nhiều. Mong chúng ta đều bình an, mỗi ngày vui vẻ\". Nữ diễn viên và tài tử Hoshino Gen đang chọn ngày đăng ký kết hôn, tổ chức tiệc cưới."
                }
            },
            {
                "type": "paragraph",
                "data": {
                    "text": "Diễn viên cũng thông báo rời công ty quản lý LesPros để hoạt động riêng. Đại diện công ty nói dù không còn hợp đồng, họ luôn ủng hộ, hỗ trợ cô."
                }
            },
            {
                "type": "paragraph",
                "data": {
                    "text": "Aragaki Yui và Hoshino Gen bén duyên năm 2016 khi đóng vợ chồng trong&nbsp;Nigeru wa Haji da ga Yaku ni Tatsu&nbsp;- phim gây sốt tại Nhật Bản một số nước châu Á. Hồi đầu năm, hai người tái hợp trong tập đặc biệt của phim, nhằm chiều lòng fan."
                }
            }
        ],
        "version": "2.20.2"
    }, 
      "cover":"https://vcdn1-giaitri.vnecdn.net/2021/05/19/saonhat2-1621416528-7177-1621416913.jpg?w=680&h=408&q=100&dpr=1&fit=crop&s=FAOkzF6L4o1bgWO3BsXOEw"
    },
    {
      "id": 02,
      "name": "Emma Watson phủ nhận đính hôn",
      "description": "Minh tinh Emma Watson phủ nhận đính hôn và khuyên người hâm mộ không nên tin những lời đồn trên mạng.",
      "content": {
        "time": 1621441519868,
        "blocks": [
            {
                "type": "paragraph",
                "data": {
                    "text": "Minh tinh Emma Watson phủ nhận đính hôn và khuyên người hâm mộ không nên tin những lời đồn trên mạng."
                }
            },
            {
                "type": "paragraph",
                "data": {
                    "text": "Ngày 18/5, Watson đăng loạt trạng thái trên Twitter về các thông tin gần đây: \"Người hâm mộ thân mến, các tin đồn tôi kết hôn hay giải nghệ chỉ là cách họ thu hút sự truy cập vào website. Nếu có thông tin mới, tôi hứa chia sẻ với các bạn\". Diễn viên cho biết không đóng phim vì muốn dành thời gian bên gia đình trong đại dịch và hạn chế di chuyển. Watson cũng chúc người hâm mộ có sức khỏe tốt để cùng vượt qua giai đoạn khó khăn."
                }
            },
            {
                "type": "paragraph",
                "data": {
                    "text": "Dự án phim gần nhất của Watson là&nbsp;<a href=\"https://vnexpress.net/little-women-ban-hoa-tau-ve-nu-gioi-4052448.html\">Little Women</a>&nbsp;(2019), đóng cùng loạt sao Saorise Ronan, Timothée Chalamet và Meryl Streep. Tháng 6/2020, Watson trở thành&nbsp;<a href=\"https://vnexpress.net/emma-watson-thanh-quan-ly-tap-doan-thoi-trang-4118998.html\">quản lý</a>&nbsp;của tập đoàn thời trang xa xỉ Kering của Pháp, hiện thâu tóm các nhà mốt gồm Gucci, Saint Laurent, Balenciaga, Alexander McQueen..."
                }
            },
            {
                "type": "paragraph",
                "data": {
                    "text": "Hồi tháng 2, người quản lý của Watson cũng phủ nhận các bài viết trên&nbsp;Daily Mail, The Sun&nbsp;rằng diễn viên tính chuyện giải nghệ để lập gia đình. Cô hẹn hò doanh nhân người Mỹ Leo Robinson từ tháng 10/2019. Suốt thời gian yêu, họ kín tiếng về mối quan hệ, hiếm khi xuất hiện bên nhau."
                }
            }
        ],
        "version": "2.20.2"
    },
      "cover":"https://vcdn-giaitri.vnecdn.net/2021/05/19/Emma-Watson-7773-1621400757.jpg"
    },
    {
      "id": 03,
      "name": "Đông Nhi, Ông Cao Thắng mua căn hộ mang thương hiệu JW Marriott",
      "description": "Vợ chồng Đông Nhi, Ông Cao Thắng mua căn hộ thương hiệu JW Marriott tại Grand Marina quận 1 với giá ước tính hơn một triệu USD.",
      "content": {
        "time": 1621441474914,
        "blocks": [
            {
                "type": "paragraph",
                "data": {
                    "text": "Đông Nhi mới khoe trên Facebook cá nhân về việc hai vợ chồng đã tậu một căn hộ hàng hiệu ở ngay trung tâm quận 1."
                }
            },
            {
                "type": "paragraph",
                "data": {
                    "text": "Đông Nhi - Ông Cao Thắng là một trong những cặp đôi đình đám của giới showbiz, không chỉ bởi chuyện tình lãng mạn, sự thành công trong sự nghiệp của cả 2 mà còn bởi khối tài sản đáng ngưỡng mộ. Nếu như Ông Cao Thắng được biết đến với gia thế \"khủng\", là người thừa kế của tập đoàn nhựa lớn nhất nhì Việt Nam và cũng là một doanh nhân trẻ thành công trong nhiều lĩnh vực thì Đông Nhi hiện tại ở vị trí một ngôi sao hạng A của làng giải trí với thu nhập không hề nhỏ."
                }
            }
        ],
        "version": "2.20.2"
    },
      "cover":"https://vcdn-giaitri.vnecdn.net/2021/05/19/DN1-2329-1621414066.jpg"
    },
    {
      "id": 04,
      "name": "5.000 người không đeo khẩu trang tại lễ hội âm nhạc",
      "description": "ANHKhoảng 5.000 khán giả khiêu vũ trong một lễ hội âm nhạc - thử nghiệm không áp dụng giãn cách xã hội tại Liverpool, tối 2/5.",
      "content": {
        "time": 1621441411355,
        "blocks": [
            {
                "type": "paragraph",
                "data": {
                    "text": "ANHKhoảng 5.000 khán giả khiêu vũ trong một lễ hội âm nhạc - thử nghiệm không áp dụng giãn cách xã hội tại Liverpool, tối 2/5."
                }
            },
            {
                "type": "paragraph",
                "data": {
                    "text": "Theo&nbsp;Telegraph, đêm nhạc tại công viên Sefton là lần đầu tiên khán giả có thể nhảy múa thoải mái trong khoảng hơn một năm qua. Ban tổ chức xét nghiệm toàn bộ khách trước khi tham gia. Chương trình kéo dài 6 tiếng, không thực hiện các biện pháp giãn cách, người tham dự không cần đeo khẩu trang. Một số nghệ sĩ biểu diễn trong sự kiện gồm Zuzu, ban nhạc The Lathums, Blossoms..."
                }
            }
        ],
        "version": "2.20.2"
    },
      "cover": "https://vcdn-giaitri.vnecdn.net/2021/05/03/anh-9674-1620033138.jpg"
    },
    {
      "id": 05,
      "name": "Sao Việt chuộng kem chống nắng bình dân",
      "description": "Đông Nhi dùng kem chống nắng 250.000 đồng, trong khi Yến Nhi, Tú Hảo là fan của sản phẩm Nhật Bản giá chưa đến 600.000 đồng.",
      "content": {
        "time": 1621441341909,
        "blocks": [
            {
                "type": "paragraph",
                "data": {
                    "text": "Đông Nhi dùng kem chống nắng 250.000 đồng, trong khi Yến Nhi, Tú Hảo là fan của sản phẩm Nhật Bản giá chưa đến 600.000 đồng."
                }
            },
            {
                "type": "paragraph",
                "data": {
                    "text": "Kem chống nắng là món dưỡng da không thể thiếu trong mùa hè, giúp bảo vệ làn da khỏi tác hại từ ánh nắng mặt trời, chống thâm nám và ngăn chặn các dấu hiệu lão hóa. Khác với nhiều loại dưỡng da khác, nhiều sao, blogger làm đẹp không đầu tư nhiều tiền cho kem chống nắng."
                }
            },
            {
                "type": "paragraph",
                "data": {
                    "text": "Ca sĩ Đông Nhi, diễn viên Lan Ngọc trung thành với kem chống nắng có chứa chiết xuất tràm trà, rau má của Some By Me, giá chỉ 250.000 đồng. Á hậu Huyền My gợi ý gel chống nắng toàn thân của Nevia, giá 300.000 đồng, dùng hàng ngày hay đi du lịch đều được. Hot girl sinh năm 2002 - Xoài Non - duy trì sử dụng sữa chống nắng nâng tông da của Bioré (80.000 đồng) từ năm lớp 10."
                }
            },
            {
                "type": "paragraph",
                "data": {
                    "text": "Theo blogger - fashionista Khánh Linh, một số loại kem chống nắng có giá đắt khi chứa những hoạt chất đặc biệt, như chất chống lão hóa. Chẳng hạn, kem chống nắng của Albion có giá gần 3.000.000 đồng, với công dụng chống oxy hóa, ngăn ngừa các dấu hiệu lão hóa do tác động từ tia UV, tia cận hồng ngoại NIR. Sữa chống nắng Sublimage UV của Chanel (giá gần 2.000.000 đồng) cũng được giới thiệu có khả năng chống lại sự ô nhiễm môi trường..."
                }
            }
        ],
        "version": "2.20.2"
    },
      "cover": "https://vcdn-giaitri.vnecdn.net/2021/05/18/khanh-linh-2-1933-1621331804.jpg"
    }
  ]
  
  for (let item of data) {
    let post = new Collection(item)
    post.saveToLocal
    console.log(post)
    let context = document.createElement('div')
    context.className = "card" 
    post.createPost(context)
    let wrapper = document.createElement('div')
    wrapper.className = "col-6 col-md-4"
    wrapper.appendChild(context)
    document.getElementById('mainContent').appendChild(wrapper)
  }
  function saveToLocal(object) {
    localStorage.setItem(object.name, JSON.stringify(object));
    return object
  }
  function addNew({value,name}) {
    if (name == "edit") {
        function checkID(item) {
            return item.id == value;
          }
        let item = data.find(checkID)
        let index = data.findIndex(checkID)
        let savedData = item.content
        document.getElementById('editor').style.display = "flex"
        document.getElementById('postList').style.display = "none"
        document.getElementById('editorjs').innerHTML = ""
        const editor = new EditorJS({data:savedData});
        let saveButton = document.getElementById('saveButton')
        saveButton.addEventListener('click', (e) => {
            console.log(e.target)
            savePost(editor, index)
        })
    }
    else {
        let savedData =  {
            time: 1552744582955,
            blocks: [
                  {
                 "type": "paragraph",
                 "data": {
                    "text": "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text. Source code of the page contains the example of connection and configuration."
                 }
              }
            ],
            version: "2.11.10"
          }
        document.getElementById('editor').style.display = "flex"
        document.getElementById('postList').style.display = "none"
        document.getElementById('editorjs').innerHTML = ""
        const editor = new EditorJS({data:savedData});

    }
    
  

  }
  
  function closeEditor(context) {
    document.getElementById('editor').style.display = "none"
    document.getElementById('postList').style.display = "flex"
  
  }
  
  function savePost(editor, index) {
      editor.save().then((outputData) => {
        data[index].content = outputData;
        console.log(data[index].content)
        console.log(data)
      }).catch((error) => {
        console.log('Saving failed: ', error)
      });
  }