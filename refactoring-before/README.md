## 모듈 클레스 함수 도메인

- 함수 하나당 하나의 일만 한다
- 모듈 클레스 하나당 각 하나의 책임만 진다
- 모듈 클레스 하나당 하나의 도메인만 가진다.

## 레코드(ex 객체) 와 컬렉션(ex 배열)

- 컬렉션은 노출하면 안된다. 그래서 아래 클래스는 잘못 된 방법이다.

  ```
  //person.hobbies.push("zzz")가 가능하기 때문이다.
      class Person(){
          private hobbies=[];
          constructor(){
              this.hobbies.push("a");
              this.hobbies.push("b")
          }

          get hobbies(){
              return this.hobbies
          }
      }
  ```

## low level refactory

- 단계를 쪼갠다
- 명확한 이름을 부여한다.
- 지역변수 없애고, 질의함수로 뺀다.
- 쪼개고 또 쪼갠다
- 파이프라인을 바꾼다.
