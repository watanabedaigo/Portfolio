Vue.component('about-component',{
    props:[
        'id',
        'question',
        'answer',
        'answer2',
    ],
    template:`
        <div class="pt-2" v-bind:id="id">
            <h6><i class="fas fa-question-circle mr-1"></i>{{ question }}</h6>
            <p style="padding-left:1.2rem;">{{ answer }}</p>
            <p style="padding-left:1.2rem;">{{ answer2 }}</p>
        </div>
    `
});

const about = new Vue({
    el:'#about',
    data:{
        abouts:[
            {
                id:'who', 
                question:'簡単な自己紹介',
                answer:'渡邊代悟と申します。東京都在住26歳、趣味は旅行です。',
            },
            {
                id:'job',
                question:'職歴は？',
                answer:'2017/4~2021/3 都立高校教員（物理）',
                answer2:'2021/4~ 株式会社アンティーファクトリー',
            },
            { 
                id:'detail',
                question:'業務内容は？',
                answer:'フロントエンドエンジニアとして、UI仕様設計から実装までを行う予定です。主にSass,JavaScript(Vue.js/React)を用いる予定です。'
            },
            { 
                id:'goal',
                question:'今後の目標は？',
                answer:'個人で生き抜くことのできる技術力を身に付けることです。'
            },

        ],
    },
});

Vue.component('skills-component',{
    props:[
        'id',
        'show',
        'icon',
        'icon2',
        'icon3',
        'icon4',
        'icon5',
        'icon6',
        'details',
    ],
    template:`
        <div class="col-lg-3 col-md-4 col-6 p-sm-2 pb-3 text-center" v-bind:id="id">
            <h6><i class="mr-1" v-bind:class="{'fab fa-html5':icon,'fab fa-php':icon2,'fas fa-database':icon3,'fas fa-network-wired':icon4,'fab fa-github-square':icon5,'fas fa-pen':icon6}"></i>{{ show }}</h6>
            <div>
                <ul style="padding-left:1rem;" class="skills">
                    <li v-for="detail in details">{{ detail }}</li>
                </ul>
            </div>
        </div>
    `
});

const skills = new Vue({
    el:'#skills',
    data:{
        skills:[
            {
                id:'frontend_skills',
                show:'フロントエンド',
                icon:true,
                details:[
                    'HTML',
                    'CSS',
                    'JavaScript',
                    'jQuery',
                ],
            },
            {
                id:'backend_skills',
                show:'バックエンド',
                icon2:true,
                details:[
                    'php(Laravel)',
                ],
            },
            {
                id:'database_skills',
                show:'DataBase',
                icon3:true,
                details:[
                    'MySQL',
                    'RealtimeDatabase',
                ],
            },
            {
                id:'infrastructure_skills',
                show:'インフラ',
                icon4:true,
                details:[
                    'AWS(EC2,S3)',
                ],
            },
            {
                id:'others',
                show:'その他',
                icon5:true,
                details:[
                    'git',
                    'GitHub',
                    'firebase',
                    'Heroku',
                    'Bootstrap',
                ],
            },
            {
                id:'studying',
                show:'学習中',
                icon6:true,
                details:[
                    'Sass',
                    'Vue.js',
                    'React',
                ],
            },
        ],
    },
});

const works = new Vue({
    el:'#works',
    data:{
        MatchingPets:{
            about:'新しい家族と出会うためのペットポータルサイトです。飼いたい品種がどのペットショップにいるのか調べることができます。',
            URL:'https://matchingpet.herokuapp.com/',
            skills:'HTML/CSS/JavaScript/jQuery/PHP/Laravel/Bootstrap',
            GitHub:'https://github.com/watanabedaigo/MatchingPets',
            difficulties:[
                'MVCモデルの理解',
                '１対多の関係の紐付け',
                '検索機能の実装',
                '並び替え機能の実装',
                'ページネーションのパラメータ引継ぎ',
                'マルチログインの実装',
                'メール送信機能の実装',
                'お気に入り機能の実装',
                '条件分岐による表示内容の切り替え',
                'ループ処理の回数による条件分岐',
                'レスポンシブデザインの実装',
            ],
        },
        TravelMemories:{
            about:'最高の旅行をするために、様々なユーザーと情報を共有することができる旅行掲示板。',
            URL:'https://your-memories-dd52e.web.app/',
            skills:'HTML/CSS/JavaScript/jQuery/firebase/Bootstrap',
            GitHub:'https://github.com/watanabedaigo/TravelMemories',
            difficulties:[
                'firebaseでのページ遷移時の変数の受け渡し',
                '非同期処理の理解',
                'ログイン状態による表示の切り替え',
                'RealtimeDatabaseのchildイベントの理解',
                'thenによる処理の順番の指定',
                'setとpushの違いの理解',
                'Storageのupload',
                'DataSnapshotの理解',
            ],
        },
        Portfolio:{
            about:'2020/12 作成',
            URL:'https://portfolio-f4b3a.web.app/',
            skills:'HTML/CSS/Scss/JavaScript/jQuery/Vue.js/Bootstrap',
            GitHub:'https://github.com/watanabedaigo/Portfolio',
            difficulties:[
                'デザインの構成',
                'モーダルの作成',
                'レスポンシブデザインの実装',
            ],
        }
    },
});

$('.about-icon').on('click',() => {
    const about = $('#about').offset().top;
    $("html, body").animate({ scrollTop: about - 20 }, 200);
});

$('.skills-icon').on('click',() => {
    const skills = $('#skills').offset().top;
    $("html, body").animate({ scrollTop: skills - 20}, 200);
});

$('.works-icon').on('click',() => {
    const works = $('#works').offset().top;
    $("html, body").animate({ scrollTop: works - 20 }, 200);
});

$('.contact-icon').on('click',() => {
    const contact = $('#contact').offset().top;
    $("html, body").animate({ scrollTop: contact - 20 }, 200);
});

$('.cover').hover(function(){
    $(this).css({
        'background-color':'dimgray',
        opacity:0.5,
    });
},function(){
    $(this).css({
        'background-color':'transparent',
        opacity:0,
    });
});