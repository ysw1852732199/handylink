define([
    'text!./storage.html',
  ], function(Template) {
    'use strict';
    return {
        name: "storageDemo",
        template: Template,
        data: function() {
            return {
                localStorage: {},
                sessionStorage: {},
                checkedLocalItems: [],
                checkedSessionItems: [],
                addLocalStorageVisible: false,
                addSessionStorageVisible: false,
                newLocalItem: {
                    key: "",
                    value: ""
                },
                newSessionItem: {
                    key: "",
                    value: ""
                }
            }
        },
        created: function(){            
            for (let index = 0; index < window.localStorage.length; index++) {
                const key = window.localStorage.key(index);
                this.localStorage[key] = window.localStorage[key];
            }
            for (let index = 0; index < window.sessionStorage.length; index++) {
                const key = window.sessionStorage.key(index);
                this.sessionStorage[key] = window.sessionStorage[key];
            }
        },
        methods: {
            addLocalCancel: function() {
                this.addLocalStorageVisible = false;
            },
            addLocalConfirm: function() {
                this.addLocalStorageVisible = false;
                window.localStorage.setItem(this.newLocalItem.key, this.newLocalItem.value);
                this.$set(this.localStorage, this.newLocalItem.key, this.newLocalItem.value);
            },
            addLocalItem: function() {
                this.addLocalStorageVisible = true;
            },
            delLocalItems: function() {
                for (let key of this.checkedLocalItems) {
                    window.localStorage.removeItem(key);
                    this.$delete(this.localStorage, key);
                }
            },
            addSessionCancel: function() {
                this.addSessionStorageVisible = false;
            },
            addSessionConfirm: function() {
                this.addSessionStorageVisible = false;
                window.sessionStorage.setItem(this.newSessionItem.key, this.newSessionItem.value);
                this.$set(this.sessionStorage, this.newSessionItem.key, this.newSessionItem.value);
            },
            addSessionItem: function() {
                this.addSessionStorageVisible = true;
            },
            delSessionItems: function() {
                for (let key of this.checkedSessionItems) {
                    window.sessionStorage.removeItem(key);
                    this.$delete(this.sessionStorage, key);
                }
            }
        },
        // computed: {
        //     localStorage: function() {


        //         return window.localStorage;
        //     },
        //     sessionStorage: function() {
        //         return window.sessionStorage;
        //     }
        // }
    }
  });