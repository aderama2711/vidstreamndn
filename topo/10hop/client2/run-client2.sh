sudo mkdir /var/lib/nlsr

nfdc face create udp://10.0.0.41
sudo NDN_LOG='nlsr.*=DEBUG' nlsr -f nlsr-client2.conf