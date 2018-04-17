insert into customer values('kim','1','김유신','kim@naver.com','010-1234-1234','1111',now());
insert into customer values('admin','admin','관리자','admin@naver.com','010-1234-1234','1111',now());
insert into customer values('lee','2','이이','lee@naver.com','010-1234-1234','2222',now());
insert into customer values('hong','3','홍길동','hong@naver.com','010-1234-1234','3333',now());
insert into customer values('park','4','박창진','park@naver.com','010-1234-1234','4444',now());
insert into customer values('jung','5','정도전','jung@naver.com','010-1234-1234','5555',now());

insert into address values('kim','서울시','마포구 신촌1길 3','1');
insert into address values('lee','서울시','마포구 신촌2길 2','2');
insert into address values('hong','서울시','마포구 신촌3길 3','3');
insert into address values('jung','서울시','마포구 신촌4길 4','4');
insert into address values('park','서울시','마포구 신촌5길 5','5');

insert into Common_Feature values('1000','붓','붓입니다','15000','여자가 필요로 하는 붓입니다','털','100');
insert into Common_Feature values('2000','립스틱','립스틱입니다','20000','여자가 필요로 하는 립스틱입니다','혼합물','200');
insert into Common_Feature values('3000','아이섀도우','아이섀도우입니다','30000','여자가 필요로 하는 아이섀도우입니다','혼합물','200');

insert into customergrade values('1000','kim','실버','100000');
insert into customergrade values('2000','lee','골드','200000');
insert into customergrade values('3000','hong','다이아몬드','300000');

insert into item values('1000','매트립스틱','10','칠리','다양한 컬러의 선명한 발색으로 어디서든 돋보이는 룩을 연출할 수 있는 립스틱으로 맥에서 가장 아이코닉한 제품','2000');
insert into item values('2000','아이섀도우','10','걸리','다양한 색상으로 사용이 간편하고 색이 오래 지속되는 파우더 타입의 아이섀도우','3000');
insert into item values('3000','로버트 리모리스','10','피그','다양한 색상으로 사용이 간편하고 색이 오래 지속되는 파우더 타입의 립스틱','2000');


insert into Comment values('1','안녕하세요','안녕하세요 문의드립니다 제품 설명에 관한 상세정보 부탁드립니다 감사합니다','100',now(),'문의','kim','1000');
insert into Comment values('2','안녕하세요','안녕하세요 문의드립니다 제품 설명에 관한 상세정보 부탁드립니다 감사합니다','200',now(),'문의','lee','2000');
insert into Comment values('3','안녕하세요','안녕하세요 문의드립니다 제품 설명에 관한 상세정보 부탁드립니다 감사합니다','300',now(),'문의','hong','2000');

insert into Basket values('1','kim','1000','1');
insert into Basket values('2','lee','2000','2');
insert into Basket values('3','hong','2000','3');

insert into orders values('1','kim','1000','1',now());
insert into orders values('2','lee','2000','2',now());
insert into orders values('3','hong','2000','3',now());
