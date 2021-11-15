const moment = require('moment');
const { Component, Fragment } = require('inferno');
const Paginator = require('hexo-component-inferno/lib/view/misc/paginator');
const ArticleMedia = require('hexo-component-inferno/lib/view/common/article_media');
const Comment = require('./common/comment');

module.exports = class extends Component {
    render() {
        const { config, page, helper } = this.props;
        const { article, plugins } = config;
        const { url_for, __, has_thumbnail, get_thumbnail, date_xml, date } = helper;

        const language = page.lang || page.language || config.language;
        
        return <Fragment>
        <div class="card">
                    <div class="card-content">
                        <p>小伙伴们</p>
                    </div>
                </div>

                <div class="card" id="apps-links-load-tips">
                    <div class="card-content">
                        <h2 class="tag is-primary">FRIENDS</h2>
                        <p><strong>加载中，请稍候…</strong></p>
                    </div>           
                </div>     

                <div class="card hidden" id="apps-links-info" style="display:none">
                    <div class="card-content">
                        <h2 class="tag is-primary">FRIENDS</h2>
                        <div class="timeline" id="app-links"></div>
                    </div>
                    <noscript>请启用 JavaScript 后 <a href="/links/">再尝试重新载入此页面</a></noscript>
                </div>

                <script src={url_for('/js/getLinks.js')}></script>
                
                <br/><div class="card" id="my-links-info">
                    <div class="card-content" >
                        <p>快来与我签订契约，交换友链，<s>成为马猴烧酒吧</s>~</p>
                        <br/><p>交换之前，请先确认已经添加本站友链。</p>
                        <p>自 2020/11/01 日起，本站将不再通过未部署 https 网站的友链申请，敬请知悉。</p>
                        <br/><p>您可以通过下面的方式提交链接：</p>
                        <ul class=".content ul" style={{
                            'list-style': "disc outside",
                            'margin-left': "2em!important",
                            'margin-top': "1em!important",
                        }}> 
                            <li>敬请阅读 <a href="https://github.com/paizi/Friends">paizi/Friends</a> 此 GitHub 仓库的 README，然后依照操作指引提交 PR 即可完成交换啦！</li>
                            <li>在评论区依照如下格式留言，由我提交到 Github 仓库，这样也是可以的~</li>
                        </ul>
                        <br/><p>本站信息如下（亦是参考格式）：</p>
                        <ul class=".content ul" style={{
                            "word-wrap": "break-word",
                            'list-style': "disc outside",
                            'margin-left': "2em!important",
                            'margin-right': "2em!important",
                            'margin-top': "1em!important",
                        }}> 
                            <li><strong>网站图标：</strong><a href="https://global.cdn.blingwang.cn/blog/head.jpg">https://global.cdn.blingwang.cn/blog/head.jpg</a></li>
                            <li><strong>Gravatar：</strong><a href="https://sdn.geekzu.org/avatar/da55a11e39638a60a814d76666be5782?s=200">https://sdn.geekzu.org/avatar/da55a11e39638a60a814d76666be5782?s=200</a></li>
                            <li><strong>网站名称：</strong>派兹的小站</li>
                            <li><strong>网站地址：</strong><a href="https://blog.blw.moe/">https://blog.blw.moe/</a></li>
                            <li><strong>网站简介/Slogan：</strong>驶向未来之船</li>
                        </ul>
                        <br/><p>如已提交友链信息，本页将在约 12 小时内展示贵站。我亦会将贵站添加到 CDN 服务的白名单中，以便你引用图标或头像~</p>
                    </div>         
                </div>

                {<Comment config={config} page={page} helper={helper} />}

                </Fragment> ;}
};
