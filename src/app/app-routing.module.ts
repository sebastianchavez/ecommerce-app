import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/products/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'category/:id',
    loadChildren: () => import('./pages/products/categories/categories.module').then( m => m.CategoriesPageModule)
  },
  {
    path: 'intro',
    loadChildren: () => import('./pages/intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./pages/products/product/product.module').then( m => m.ProductPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/user/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'tracing',
    loadChildren: () => import('./pages/user/tracing/tracing.module').then( m => m.TracingPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/user/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/user/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'list-of-category',
    loadChildren: () => import('./pages/products/list-of-category/list-of-category.module').then( m => m.ListOfCategoryPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./pages/products/cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'my-shopping',
    loadChildren: () => import('./pages/user/my-shopping/my-shopping.module').then( m => m.MyShoppingPageModule)
  },
  {
    path: 'branch-office',
    loadChildren: () => import('./pages/store/branch-office/branch-office.module').then( m => m.BranchOfficePageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/store/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'edit-product',
    loadChildren: () => import('./pages/products/edit-product/edit-product.module').then( m => m.EditProductPageModule)
  },
  {
    path: 'view-product',
    loadChildren: () => import('./pages/products/view-product/view-product.module').then( m => m.ViewProductPageModule)
  },
  {
    path: 'my-profile',
    loadChildren: () => import('./pages/user/my-profile/my-profile.module').then( m => m.MyProfilePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
