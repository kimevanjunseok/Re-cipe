# RE:CIPE

> 김예지, 김준석, 송영신, 이호중, 조성원

## 1. RE:CIPE

* 재료 기반 레시피 정보 안내 Application
* 카테고리별 레시피 정보 안내
* PWA를 활용하여 별도의 App 설치를 하지 않아도 `RE:CIPE`설치 가능
* `localStorage`에 사용자 정보를 저장하여 자동로그인 가능
  * 로그아웃시 `localStorage`에 저장된 사용자의 정보는 모두 삭제됨



## 2. Technologies Used

* Node.js + Express.js
* MongoDB + Mongoose
* Vue.js
* PWA



## 3. Get Started 

* `git clone`

* `backend` 

  ```bash
  npm install
  npm start
  ```

* `frontapp`

  ```bash
  npm install
  npm run serve
  ```

  

## 4. Function

### 1) 회원가입 / 로그인 / 로그아웃 / 회원탈퇴

1. **회원가입**

   * 간편 회원가입을 위해 ID, Password 입력
     * ID, Password 모두 최소 4자 이상이어야 회원가입이 가능하다.
     * 입력 조건에 맞지 않는다면 회원가입이 불가능하다. 
     * ID는 자동으로 중복확인이 가능하다.
   * 재료 기반 레시피 추천으로 미리 사용자가 냉장고 속에 있는 재료를 선택하여 이를 바탕으로 레시피 추천을 받을 수 있도록 한다.
   * Password 저장시 `crypto` 모듈을 사용하여 암호화 한다.

   <img width="392" alt="회원가입" src="https://user-images.githubusercontent.com/45961217/71456216-c387cf00-27db-11ea-8021-30ce9f1fc67d.png">

   <img width="392" alt="회원가입2" src="https://user-images.githubusercontent.com/45961217/71456312-3002ce00-27dc-11ea-8073-319ff047021c.png">

   

2. **로그인**

   * ID, Password를 입력하여 로그인을 한다.
   * 로그인 시, 사용자의 정보를 가져와 `localStorage`에 저장하여 로그아웃을 하기 전까지는 사이트 접속시 자동로그인이 되도록 한다.
     * `localStorage`에는 회원의 ID와 회원의 냉장고 속 재료를 저장한다.

   <img width="392" alt="로그인" src="https://user-images.githubusercontent.com/45961217/71456461-d353e300-27dc-11ea-91a4-757ef268efb7.png">

   

3. **로그아웃**

   * 로그아웃 시, `localStorage`에 있는 사용자의 정보는 모두 삭제된다.
   * 후에 접속한다면 다시 로그인을 해야한다.

   <img width="392" alt="로그아웃" src="https://user-images.githubusercontent.com/45961217/71456793-896bfc80-27de-11ea-8ce7-34a2c4528394.png">

   

### 2) 재료 검색

* 재료 기반 레시피 검색이 가능하다.
* 재료를 입력할 시, 재료에 맞는 사진이 그릇에 놓이게 된다.
  * 최대 9개의 재료 입력이 가능하다.
* 또한, 그릇에 놓인 재료를 한번더 클릭하면 해당 재료를 삭제할 수 있다.
* 입력한 재료는 사용자의 재료 정보에 업데이트 되어 다음 접속시에도 활용할 수 있다.
  * `Database`와 `localStroage`에 업데이트 된다.
* 레시피 검색을 누르면 재료를 바탕으로 한 레시피가 정보가 제공된다.

<img width="392" alt="mainpage" src="https://user-images.githubusercontent.com/45961217/71456910-013a2700-27df-11ea-9f10-665775742922.png">

<img width="392" alt="재료입력" src="https://user-images.githubusercontent.com/45961217/71456996-6aba3580-27df-11ea-92d6-dfadb73e578f.png">



### 3) 카테고리별 검색

*  나라, 레시피 Categroy, 요리 난이도로 나누어 사용자가 원하는 카테고리를 선택할수 있도록 한다.
  * 이를 클릭하면, 카테고리에 맞는 레시피 정보가 제공된다.
* 검색창에 레시피 정보를 검색하면 이에 맞는 레시피 정보가 제공된다.

<img width="392" alt="카테고리" src="https://user-images.githubusercontent.com/45961217/71457174-1bc0d000-27e0-11ea-908a-c54e62b4894c.png">

<img width="392" alt="카테고리2" src="https://user-images.githubusercontent.com/45961217/71457177-1ebbc080-27e0-11ea-8ad6-9197867a4a7b.png">



### 4) PWA

* 사용자의 편리를 위하여 PWA를 제공한다.
* User 아이콘 옆, 모바일 아이콘을 클릭하면 설치 안내가 나온다.
  * 만약, 설치가 되었다면 모바일 아이콘은 사라진다. (재설치 방지)
  * 설치 후, Chrome 앱에서도 확인할 수 있다.

<img width="392" alt="install" src="https://user-images.githubusercontent.com/45961217/71457375-f7b1be80-27e0-11ea-80c9-1fc3eeb22a1b.png">

<img width="392" height="350" alt="설치완료" src="https://user-images.githubusercontent.com/45961217/71457498-92aa9880-27e1-11ea-9516-fb17653c0a43.png">

<img width="392" alt="완성" src="https://user-images.githubusercontent.com/45961217/71457583-f339d580-27e1-11ea-9bf2-e0ce6a224f1e.png">

<img width="1133" alt="크롬앱확인" src="https://user-images.githubusercontent.com/45961217/71457784-026d5300-27e3-11ea-82e3-6a1276779b6e.png">



### 5) Recipe 

* 레시피 목록, 레시피 상세정보, 레시피 등록/수정/삭제가 가능하다.

<img width="392" alt="레시피목록" src="https://user-images.githubusercontent.com/45961217/71457733-b7534000-27e2-11ea-92a0-a51733366c86.png">

<img width="392" alt="레시피정보" src="https://user-images.githubusercontent.com/45961217/71457731-b4584f80-27e2-11ea-9cf6-b59d9ebbf299.png">

<img width="392" alt="레시피작성" src="https://user-images.githubusercontent.com/45961217/71457722-af939b80-27e2-11ea-925f-21fcbf469376.png">