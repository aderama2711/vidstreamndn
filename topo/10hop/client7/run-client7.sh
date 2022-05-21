sudo mkdir /var/lib/nlsr

nfdc face create udp://10.0.0.61
sudo NDN_LOG='nlsr.*=DEBUG' nlsr -f nlsr-client7.conf