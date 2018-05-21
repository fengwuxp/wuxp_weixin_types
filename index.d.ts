/**
 * 微信小程序
 */
import {RequestTask, RequestReq} from "./src/wechat/network/request";
import {DownloadFileReq, DownloadTask, UploadReq, UploadTask} from "./src/wechat/network/up_down";
import {GetNetWorkTypeOptions, NetWorkChangeResult} from "./src/wechat/device/networkType";
import {ShowActionSheetOptions, ShowLoadingOptions, ShowModalOptions, ShowToastOptions} from "./src/wechat/ui/modal";
import {
    GetStorageInfoOptions,
    GetStorageOptions,
    RemoveStorageOptions,
    SetStorageOptions,
    StorageInfo
} from "./src/wechat/storage";

// declare namespace WeChat {
// }

// export = WeChat;
// export as namespace WeChat;

//使用时要在tsconfig.json 中的types中加入 "wechat" 即：types:["wechat"]
declare global {

    //微信API列表
    namespace wx {
        /**
         * 发起网络请求
         * 文档地址 https://mp.weixin.qq.com/debug/wxadoc/dev/api/network-request.html#wxrequestobject
         * @param {RequestReq} req
         * @return RequestTask
         */
        function request(req: RequestReq): RequestTask ;


        /*----------------------------------------- 文件上传、下载 --------------------------------*/
        /**
         * 上传文件
         * 文档地址：https://mp.weixin.qq.com/debug/wxadoc/dev/api/network-file.html
         * @param {UploadReq} req
         * @return UploadTask
         */
        function uploadFile(req: UploadReq): UploadTask;

        /**
         * 文件下载
         * 文档地址 https://mp.weixin.qq.com/debug/wxadoc/dev/api/network-file.html#wxuploadfileobject
         * @param {DownloadFileReq} req
         * @return DownloadTask
         */
        function downloadFile(req: DownloadFileReq): DownloadTask;


        /*----------------------------------------- 网络状态 --------------------------------*/

        /**
         * 获取网络类型
         * 文档地址 https://mp.weixin.qq.com/debug/wxadoc/dev/api/device.html#wxgetnetworktypeobject
         * @param {GetNetWorkTypeOptions} options
         */
        function getNetworkType(options: GetNetWorkTypeOptions): void;

        /**
         * 监听网络状态变化。
         * @param {(result: NetWorkChangeResult) => void} callback
         */
        function onNetworkStatusChange(callback: (result: NetWorkChangeResult) => void): void;


        /*----------------------------------------- 数据缓存 --------------------------------*/

        /**
         * 将数据存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个异步接口。
         * 文档地址 https://mp.weixin.qq.com/debug/wxadoc/dev/api/data.html
         * @param {SetStorageOptions} options
         */
        function setStorage(options: SetStorageOptions): void;

        /**
         * 将 data 存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个同步接口。
         * @param {string} key
         * @param {string | object} data
         */
        function setStorageSync(key: string, data: string | object): void

        /**
         * 从本地缓存中异步获取指定 key 对应的内容。
         * @param {GetStorageOptions} options
         */
        function getStorage(options: GetStorageOptions): void

        /**
         * 同步从本地缓存中同步获取指定 key 对应的内容。
         * @param {string} key
         * @return {string}
         */
        function getStorageSync(key: string): string;


        /**
         * 异步获取当前storage的相关信息
         * @param {GetStorageInfoOptions} options
         */
        function getStorageInfo(options: GetStorageInfoOptions): void;

        /**
         * 同步获取当前storage的相关信息
         * @return {StorageInfo}
         */
        function getStorageInfoSync(): StorageInfo;

        /**
         * 从本地缓存中异步移除指定 key
         * @param {RemoveStorageOptions} options
         */
        function removeStorage(options: RemoveStorageOptions): void

        /**
         * 同步 从本地缓存中同步移除指定 key
         * @param {string} key
         */
        function removeStorageSync(key: string): void;

        /**
         * 清理本地数据缓存
         */
        function clearStorage(): void

        /**
         * 同步 清理本地数据缓存
         */
        function clearStorageSync(): void;

        /*----------------------------------------- 交互反馈 --------------------------------*/

        /**
         * 显示消息提示框
         * 文档地址 https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-react.html
         * @param {ShowToastOptions} options
         */
        function showToast(options: ShowToastOptions): void;

        /**
         * 显示 loading 提示框, 需主动调用 wx.hideLoading 才能关闭提示框
         * @param {ShowLoadingOptions} options
         */
        function showLoading(options: ShowLoadingOptions): void;

        /**
         * 隐藏消息提示框
         */
        function hideToast(): void;

        /**
         * 隐藏 loading 提示框
         */
        function hideLoading(): void;


        /**
         * ​显示模态弹窗
         * @param {ShowModalOptions} options
         */
        function showModal(options: ShowModalOptions): void;

        /**
         * ​显示操作菜单
         * @param {ShowActionSheetOptions} options
         */
        function showActionSheet(options: ShowActionSheetOptions): void;


    }
}
