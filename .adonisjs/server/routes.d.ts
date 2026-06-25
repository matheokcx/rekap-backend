import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'drive.fs.serve': { paramsTuple: [...ParamValue[]]; params: {'*': ParamValue[]} }
    'auth.new_account.store': { paramsTuple?: []; params?: {} }
    'auth.access_tokens.store': { paramsTuple?: []; params?: {} }
    'profile.profile.show': { paramsTuple?: []; params?: {} }
    'profile.access_tokens.destroy': { paramsTuple?: []; params?: {} }
    'agencies.index': { paramsTuple?: []; params?: {} }
    'agencies.create': { paramsTuple?: []; params?: {} }
    'agencies.store': { paramsTuple?: []; params?: {} }
    'agencies.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'agencies.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'agencies.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'agencies.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'add_waitlists.add': { paramsTuple?: []; params?: {} }
  }
  GET: {
    'drive.fs.serve': { paramsTuple: [...ParamValue[]]; params: {'*': ParamValue[]} }
    'profile.profile.show': { paramsTuple?: []; params?: {} }
    'agencies.index': { paramsTuple?: []; params?: {} }
    'agencies.create': { paramsTuple?: []; params?: {} }
    'agencies.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'agencies.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  HEAD: {
    'drive.fs.serve': { paramsTuple: [...ParamValue[]]; params: {'*': ParamValue[]} }
    'profile.profile.show': { paramsTuple?: []; params?: {} }
    'agencies.index': { paramsTuple?: []; params?: {} }
    'agencies.create': { paramsTuple?: []; params?: {} }
    'agencies.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'agencies.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  POST: {
    'auth.new_account.store': { paramsTuple?: []; params?: {} }
    'auth.access_tokens.store': { paramsTuple?: []; params?: {} }
    'profile.access_tokens.destroy': { paramsTuple?: []; params?: {} }
    'agencies.store': { paramsTuple?: []; params?: {} }
    'add_waitlists.add': { paramsTuple?: []; params?: {} }
  }
  PUT: {
    'agencies.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  PATCH: {
    'agencies.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  DELETE: {
    'agencies.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}