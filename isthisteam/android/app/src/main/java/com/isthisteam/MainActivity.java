package com.isthisteam;

import android.os.Bundle;
import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactActivityDelegate;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "isthisteam";
  }

 // add onCreate with SplashScreen.show(this)
//  @Override
//  protected void onCreate(Bundle savedInstanceState) {
//    SplashScreen.show(this); 
//    super.onCreate(savedInstanceState);
//  }
 
// @Override
// protected void onCreate(Bundle savedInstanceState) {
//   super.onCreate(null);
// }

@Override
protected void onCreate(Bundle saveInstanceState){
  super.onCreate(saveInstanceState);
  //setContentView(R.layout.activity_main);

  // getHashKey();
}
// private void getHashKey(){
//   PackageInfo packageInfo = null;
//   try {
//     packageInfo = getPackageManager().getPackageInfo(getPackageName(), PackageManager.GET_SIGNATURES);
//   } catch (PackageManager.NameNotFoundException e) {
//     e.printStackTrace();
//   }
//   if (packageInfo == null)
//     Log.e("KeyHash", "KeyHash:null");

//   for (Signature signature : packageInfo.signatures) {
//     try {
//       MessageDigest md = MessageDigest.getInstance("SHA");
//       md.update(signature.toByteArray());
//       Log.d("KeyHash", Base64.encodeToString(md.digest(), Base64.DEFAULT));
//     } catch (NoSuchAlgorithmException e) {
//       Log.e("KeyHash", "Unable to get MessageDigest. signature=" + signature, e);
//     }
//   }
// }
  /**
   * Returns the instance of the {@link ReactActivityDelegate}. Here we use a util class {@link
   * DefaultReactActivityDelegate} which allows you to easily enable Fabric and Concurrent React
   * (aka React 18) with two boolean flags.
   */
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new DefaultReactActivityDelegate(
        this,
        getMainComponentName(),
        // If you opted-in for the New Architecture, we enable the Fabric Renderer.
        DefaultNewArchitectureEntryPoint.getFabricEnabled());
  }};
//  @Override
//   protected void onCreate(Bundle savedInstanceState) {
//     super.onCreate(null);
//   }
// }
