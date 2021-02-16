Vue.component('about-component',{
    props:['about'],
    template:`
        <div class="mb-3" v-bind:id="about.id">
            <h6><i class="fas fa-question-circle mr-1"></i>{{ about.question }}</h6>
            <p style="padding-left:1.2rem;" v-html="about.answer"></p>
        </div>
    `
})

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
                answer:`2017/4~2021/3 都立高校教員（物理）<br>
                        2021/4~ 株式会社アンティーファクトリー
                `,
            },
            { 
                id:'detail',
                question:'業務内容は？',
                answer:'フロントエンドエンジニアとして、Sass,JavaScript(Vue.js/React)を用いたUI仕様設計から実装までを行う予定です。'
            },
            { 
                id:'goal',
                question:'今後の目標は？',
                answer:'個人で生き抜くことのできる技術力を身に付けることです。'
            },

        ],
    },
})

Vue.component('skills-component',{
    props:['skill'],
    template:`
        <div class="col-lg-3 col-md-4 col-6 p-sm-2 pb-3 text-center" v-bind:id="skill.id">
            <h6><i class="mr-1" v-bind:class="{'fab fa-html5':skill.icon,'fab fa-php':skill.icon2,'fas fa-database':skill.icon3,'fas fa-network-wired':skill.icon4,'fab fa-github-square':skill.icon5,'fas fa-pen':skill.icon6}"></i>{{ skill.show }}</h6>
            <div>
                <ul style="padding-left:1rem;" class="skills">
                    <li v-for="detail in skill.details" v-html="detail"></li>
                </ul>
            </div>
        </div>
    `
})

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
                    'Realtime<br>Database',
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
})

Vue.component('works-component',{
    props:['personal_work'],
    template:`
        <div class="col-md-4 col-6 p-2 portfolio">
            <div data-toggle="modal" v-bind:data-target="'#' + personal_work.id">
                <h6 class="text-center work">{{ personal_work.name }}</h6>
                <div>
                    <img v-bind:src="personal_work.top" class="img-fluid" v-bind:alt="personal_work.id">
                </div>
                <div class="cover"></div>
            </div>

            <div class="modal fade" v-bind:id="personal_work.id" tabindex="-1" role="dialog" aria-labelledby="label1" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div class="p-md-2 p-0">
                                <div class="row no-gutters">
                                    <div class="col-3 p-1">
                                        <img v-bind:src="personal_work.img1" class="img-fluid">
                                    </div>
                                    <div class="col-3 p-1">
                                        <img v-bind:src="personal_work.img2" class="img-fluid">
                                    </div>
                                    <div class="col-3 p-1">
                                        <img v-bind:src="personal_work.img3" class="img-fluid">
                                    </div>
                                    <div class="col-3 p-1">
                                        <img v-bind:src="personal_work.img4" class="img-fluid">
                                    </div>
                                </div>

                                <h5 class="text-left pl-3 mt-3 line_narrow" id="label1">概要</h5>
                                <p class="pt-1 pr-3 pb-2 pl-3" v-html="personal_work.about"></p>

                                <h5 class="text-left pl-3 mt-3 line_narrow">URL</h5>
                                <p class="pt-1 pr-3 pb-2 pl-3" style="word-wrap:break-word;"><a v-bind:href="personal_work.url" target="_blank">{{ personal_work.url }}</a></p>
                                
                                <h5 class="text-left pl-3 mt-3 line_narrow">技術・コード</h5>
                                <p class="pt-1 pr-3 pl-3" style="word-wrap:break-word;">{{ personal_work.skills }}</p>
                                <p class="pr-3 pb-2 pl-3" style="word-wrap:break-word;"><a v-bind:href="personal_work.github" target="_blank">{{ personal_work.github }}</a></p>
                                
                                <template v-if="personal_work.addreason">
                                    <h5 class="text-left pl-3 mt-3 line_narrow">作成理由</h5>
                                    <p class="pt-1 pr-3 pb-2 pl-3" v-html="personal_work.reason"></p>
                                </template>
                                
                                <template v-if="personal_work.addingenuity">
                                    <h5 class="text-left pl-3 mt-3 line_narrow">工夫した点</h5>
                                    <p class="pt-1 pr-3 pb-2 pl-3" v-html="personal_work.ingenuity"></p>
                                </template>
                                
                                <h5 class="text-left pl-3 mt-3 line_narrow">苦労した点</h5>
                                <ul class="pt-1 pb-2">
                                    <li v-for="difficulty in personal_work.difficulties">{{ difficulty }}</li>
                                </ul>
                                
                                <h5 class="text-left pl-3 mt-3 line_narrow">作成を終えて</h5>
                                <p class="pt-1 pr-3 pb-2 pl-3" v-html="personal_work.impression"></p>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">閉じる</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
})

const works = new Vue({
    el:'#works',
    data:{
        personal_works:[
            {
                id:'MatchingPets',
                name:'ペットのポータルサイト',
                top:'img/MatchingPets/top-short.png',
                img1:'img/MatchingPets/top.png',
                img2:'img/MatchingPets/varieties.png',
                img3:'img/MatchingPets/candidates.png',
                img4:'img/MatchingPets/candidateshow.png',
                about:'<strong class="strong-line">新しい家族と出会うためのペットポータルサイト</strong>です。飼いたい品種がどのペットショップにいるのか調べることができます。',
                url:'https://matchingpet.herokuapp.com/',
                skills:'HTML/CSS/JavaScript/jQuery/PHP/Laravel/Bootstrap',
                github:'https://github.com/watanabedaigo/MatchingPets',
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
                addreason:true,
                reason:`
                    パグを飼いたいと思った時があるのですが、希望の年齢、性別、毛色のパグがどのペットショップにいるのかを探すのが難しかったことがあります。
                    現在、大手のペットショップは自社のサイトで飼育している犬や猫をを公開しているのですが、個人のペットショップでは公開しているところがほとんどないです。
                    しかし、新しい家族を迎えるわけなので、できるだけ多くのパグと会いたいという気持ちがあり、ペットのポータルサイトがあったらいいなと思い始めました。<br>
                    そこで、犬だけに限らず、様々なペットの候補が一覧で表示され、飼いたい品種がどこにいるのかが分かるようなペットのポータルサイトを作成しました。
                    （現在はテストデータで公開しています。）
                `,
                impression:`
                    <strong class="strong-line">楽しかった</strong>の一言に尽きます。<br>
                    コンセプトを決め、0からデザインを考え、一つ一つの機能を実装していく。その中で、学習したことをアウトプットしたり、分からないものを一つ一つ調べて解決したり中で、
                    思い描いた機能やデザインが実装できた時の喜び、楽しさを知ることができました。
                    また、検索の仕方がいかに大切かを知ることもできました。機能を実装する時やエラーを解決する時、初めはエラーコードをそのままググったり、検索上位にあるまとめの記事を1~2個読み、
                    使えそうな内容を引用してみたりしていました。しかし、エラーの原因は開発環境、言語のバージョンによっても異なるため、うまくいかないことが多く、本質的な解決になっていないことを痛感しました。
                    そこからは、抽象的に調べてから、その中で出てきたキーワード一つ一つを具体的に調べ、全体像を把握するようにしました。
                    そして、仮説・検証・考察の流れに従い、選択肢を一つずつ潰すように心がけました。手を動かし、なんとか解決した時の喜びは忘れられません。<br>
                    初めてのオリジナルアプリということで、思い入れのある作品です。まだまだコードに読みづらい所があると思うので、今後も細部の修正をし、大切に育てていきたいと思っています。
                `,
            },
            {
                id:'TravelMemories',
                name:'旅行掲示板',
                top:'img/TravelMemories/top-short.png',
                img1:'img/TravelMemories/top.png',
                img2:'img/TravelMemories/show.png',
                img3:'img/TravelMemories/img.png',
                about:'最高の旅行をするために、<strong class="strong-line">様々なユーザーと情報を共有することができる旅行掲示板。</strong>',
                url:'https://your-memories-dd52e.web.app/',
                skills:'HTML/CSS/JavaScript/jQuery/firebase/Bootstrap',
                github:'https://github.com/watanabedaigo/TravelMemories',
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
                addreason:true,
                reason:`
                    きっかけは、趣味が旅行ということです。目的地を決めず、気の赴くままに行動するのも好きですが、目的地を決めて観光するのも好きです。
                    目的地を決める際、実際に足を運んだ人の感想や撮った写真のような生の情報が欲しいので、旅先の思い出を共有できるような掲示板を作成しました。
                `,
                impression:`
                    掲示板なので、リアルタイムに更新されること、投稿の度にページ遷移が行われないストレスレスなものであることを重要視し、
                    firebaseのRealtimeDatabaseを軸にサービスを作成しました。
                    変数の受け渡し方、データの追加の仕方、写真の保存の仕方、データベースがRDBではなくスキーマレスであることなど、Laravelでの開発とは異なる点が多くて
                    苦戦しました。しかし、ドキュメントが分かりやすく整理されていたため、試行錯誤して開発することができました。
                    また、直前までLaravelでの開発を進めていたため、BaaSを用いることで、JavaScriptのみでデータのやりとりができることに感動しました。
                    それぞれの違いを踏まえて、用途に応じて使い分けることができるようになりたいと思いました。<br>
                    旅行が好きでよく行くので、その思い出を残すという意味も込めて、サービスを活用していきたいと思います。
                `,
            },
            {
                id:'Portfolio',
                name:'ポートフォリオ',
                top:'img/Portfolio/top-short.png',
                img1:'img/Portfolio/top.png',
                img2:'img/Portfolio/skills.png',
                img3:'img/Portfolio/contact.png',
                img4:'img/Portfolio/modal.png',
                about:'<strong class="strong-line">2021/2</strong> 更新',
                url:'https://portfolio-f4b3a.web.app/',
                skills:'HTML/CSS/JavaScript/jQuery/Vue.js/firebase/Bootstrap',
                github:'https://github.com/watanabedaigo/Portfolio',
                difficulties:[
                    'デザインの構成',
                    'モーダルの作成',
                    'レスポンシブデザインの実装',
                ],
                addingenuity:true,
                ingenuity:`
                    シンプルで分かりやすいことを前提にしつつ、目を引くようなカラフルなトップ写真と、
                    落ち着いた雰囲気なモノトーンのコンテンツのコントラストから、印象に残るようなポートフォリオを目指しました。
                    トップの写真は今まで行った旅行先の写真を合成したもので、自分の趣味を取り入れてみました。
                `,
                impression:`
                    Bootstrapの便利さを再認識しました。特に、レスポンシブデザインを実装する際のグリッドシステムの有用性は素晴らしいと思います。
                    コーディングする際は、まずはBootstrapでおまかなデザインを実装し、細かい部分をcssで書くという流れでとても効率良く作業を進めることができました。<br>
                    ポートフォリオの作成を終えて、ようやくエンジニアへの転職活動が始まりました。これからの新たな人生への期待が膨らむと同時に、これがスタートであることを再認識し、ひたむきに努力していこうという決意が固まりました。<br>
                    転職活動が終わった今、<strong class="strong-line">新しい技術を実際に使い身に付けるために、日々ポートフォリオを更新しています。</strong>
                `,
            },
        ],
        business_works:[
        ],
    },
})

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

const header = new Vue({
    el:'header',
    methods:{
        scroll:function(event){
            switch(event.currentTarget){
                case $('.about-icon')[0]:
                    const about = $('#about').offset().top;
                    $("html, body").animate({ scrollTop: about - 20 }, 200);
                    break;
                case $('.skills-icon')[0]:
                    const skills = $('#skills').offset().top;
                    $("html, body").animate({ scrollTop: skills - 20}, 200);
                    break;
                case $('.works-icon')[0]:
                    const works = $('#works').offset().top;
                    $("html, body").animate({ scrollTop: works - 20 }, 200);
                    break;
                case $('.contact-icon')[0]:
                    const contact = $('#contact').offset().top;
                    $("html, body").animate({ scrollTop: contact - 20 }, 200);
                    break;    
            }
        }
    }
})